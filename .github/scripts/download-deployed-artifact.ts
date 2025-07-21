// .github/scripts/download-deployed-artifact.ts
import * as core from '@actions/core';
import * as github from '@actions/github';
import axios from 'axios';
import fs from 'fs';

async function run() {
  core.info('Starting download-deployed-artifact.ts script (REST API approach)...');
  try {
    const token = core.getInput('github_token', { required: true });
    if (!token) {
      core.setFailed('GitHub token not supplied as input `github_token`.');
      return;
    }
    core.info('DEBUG: GitHub token successfully acquired via core.getInput().');

    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;
    const pagesEnv = 'github-pages'; // Standard GitHub Pages environment name
    core.info(`DEBUG: Repository: ${owner}/${repo}, Environment: ${pagesEnv}`);

    // --- NEW LOGIC: Use REST API to find the active deployment status and extract workflow_run ID ---
    core.info(`DEBUG: Listing deployments for environment '${pagesEnv}'...`);
    const { data: deployments } = await octokit.rest.repos.listDeployments({
      owner,
      repo,
      environment: pagesEnv,
      per_page: 5, // Get a few recent ones
    });

    if (!deployments || deployments.length === 0) {
      core.warning(`DEBUG: No deployments found for environment '${pagesEnv}'.`);
      core.setOutput('download-path', 'empty');
      return;
    }

    core.info(`DEBUG: Found ${deployments.length} deployments. Searching for an active status...`);

    let activeRunId: number | undefined;
    let foundDeploymentUrl: string | undefined;

    for (const deployment of deployments) {
      core.info(`DEBUG: Checking deployment ID: ${deployment.id}`);
      const { data: statuses } = await octokit.rest.repos.listDeploymentStatuses({
        owner,
        repo,
        deployment_id: deployment.id,
        per_page: 1, // Only need the latest status for efficiency
        page: 1,
      });

      if (!statuses || statuses.length === 0) {
        core.info(`DEBUG:   No statuses found for deployment ID: ${deployment.id}. Skipping.`);
        continue;
      }

      const latestStatus = statuses[0];
      core.info(
        `DEBUG:   Latest status for deployment ${deployment.id}: State='${latestStatus.state}', LogURL=${latestStatus.log_url}`,
      );

      // --- CHANGE THIS LINE ---
      // Look for 'success' state, as 'active' is not a valid state for a deployment status
      if (latestStatus.state === 'success' && latestStatus.log_url) {
        // Parse the workflow_run ID from the log_url
        const runIdMatch = latestStatus.log_url.match(/\/runs\/(\d+)\//);
        if (runIdMatch && runIdMatch[1]) {
          activeRunId = parseInt(runIdMatch[1], 10);
          foundDeploymentUrl = deployment.url;
          core.info(
            `DEBUG:   Found SUCCESSFUL deployment status with Workflow Run ID: ${activeRunId}`,
          );
          break; // Found the active one, no need to check older deployments
        } else {
          core.warning(
            `DEBUG:   Successful status found for ${deployment.id}, but could not parse run ID from log_url: ${latestStatus.log_url}`,
          );
        }
      }
    }

    if (!activeRunId) {
      core.warning(
        `DEBUG: No ACTIVE deployment found with a parsable workflow run ID. Outputting 'empty'.`,
      );
      core.setOutput('download-path', 'empty');
      return;
    }

    core.info(
      `DEBUG: Identified Active Deployment from URL: ${foundDeploymentUrl}, linked to Workflow Run ID: ${activeRunId}.`,
    );

    // --- Use REST API to list and download artifacts for THIS specific run ---
    const artifactName = 'github-pages'; // Standard artifact name for Pages builds
    core.info(
      `DEBUG: Listing artifacts for workflow run ${activeRunId} to find '${artifactName}'...`,
    );
    const {
      data: { artifacts },
    } = await octokit.rest.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: activeRunId,
    });

    core.info(`DEBUG: Found ${artifacts.length} artifacts for run ${activeRunId}.`);
    if (artifacts.length > 0) {
      artifacts.forEach((artifact: any) => {
        core.info(
          `DEBUG:   Artifact: Name=${artifact.name}, ID=${artifact.id}, Size=${artifact.size_in_bytes}`,
        );
      });
    }

    const pagesArtifact = artifacts.find((a) => a.name === artifactName);

    if (!pagesArtifact) {
      core.setFailed(
        `DEBUG: Could not find a '${artifactName}' artifact for workflow run ${activeRunId}.`,
      );
      return;
    }

    core.info(`DEBUG: Found Pages artifact: Name='${pagesArtifact.name}', ID=${pagesArtifact.id}.`);
    core.info(`DEBUG: Requesting download URL for artifact ID: ${pagesArtifact.id}...`);

    const { url } = await octokit.rest.actions.downloadArtifact({
      owner,
      repo,
      artifact_id: pagesArtifact.id,
      archive_format: 'zip',
    });

    core.info(`DEBUG: Downloading artifact from pre-signed URL: ${url}`); // Be careful: URL may contain temp token, GitHub usually masks it.
    const downloadPath = 'deployed-site.zip';
    const writer = fs.createWriteStream(downloadPath);
    const response = await axios({ url, method: 'GET', responseType: 'stream' });
    response.data.pipe(writer);

    await new Promise<void>((resolve, reject) => {
      // Added Promise<void> type hint
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    core.info(`SUCCESS: Successfully downloaded deployed site to ${downloadPath}`);
    core.setOutput('download-path', downloadPath);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`ERROR: Script failed with: ${error.message}`);
    } else {
      core.setFailed(`ERROR: An unknown error occurred: ${JSON.stringify(error)}`);
    }
  } finally {
    core.info('Finished download-deployed-artifact.ts script.');
  }
}

run();
