// .github/scripts/download-deployed-artifact.ts
import * as core from '@actions/core';
import * as github from '@actions/github';
import axios from 'axios';
import fs from 'fs';

async function run() {
  core.info('Starting download-deployed-artifact.ts script...');
  try {
    // --- Using core.getInput() for the token, expecting 'github_token' input name ---
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

    // --- GraphQL Query to find the active deployment and its workflow run ID ---
    const query = `
      query GetLatestPagesDeployment($owner: String!, $repo: String!, $environment: String!) {
        repository(owner: $owner, name: $repo) {
          deployments(
            first: 5, # Fetch a few more to debug ordering/state issues if first is not active
            environments: [$environment],
            orderBy: {field: CREATED_AT, direction: DESC}
          ) {
            nodes {
              id
              state # 'ACTIVE', 'IN_PROGRESS', 'PENDING', 'QUEUED', 'ERROR', 'FAILURE'
              description # Sometimes useful for debugging
              commit {
                oid # To confirm which commit it's for
              }
              workflowRun { # This links to the workflow run that created this deployment
                id
                databaseId # This is the run_id (number) we need for REST API listWorkflowRunArtifacts
                event # e.g., 'push', 'workflow_dispatch'
                status # e.g., 'COMPLETED', 'IN_PROGRESS', 'QUEUED'
                conclusion # e.g., 'SUCCESS', 'FAILURE', 'CANCELLED'
                url # Direct URL to the workflow run
              }
            }
          }
        }
      }
    `;

    core.info(`DEBUG: Executing GraphQL query to find active deployment...`);
    const graphqlResponse: any = await octokit.graphql(query, {
      owner,
      repo,
      environment: pagesEnv,
    });

    const deploymentNodes = graphqlResponse.repository?.deployments?.nodes;

    if (!deploymentNodes || deploymentNodes.length === 0) {
      core.warning(`DEBUG: No deployments found for environment '${pagesEnv}' via GraphQL.`);
      core.setOutput('download-path', 'empty');
      return;
    }

    core.info(`DEBUG: Found ${deploymentNodes.length} deployment nodes.`);
    deploymentNodes.forEach((node: any, index: number) => {
      core.info(
        `DEBUG: Deployment ${index + 1}: ID=${node.id}, State=${node.state}, WorkflowRunLinked=${!!node.workflowRun}`,
      );
      if (node.workflowRun) {
        core.info(
          `DEBUG:   Run: ID=${node.workflowRun.databaseId}, Event=${node.workflowRun.event}, Status=${node.workflowRun.status}, Conclusion=${node.workflowRun.conclusion}`,
        );
      }
    });

    // Filter for the active deployment, as the query only gives latest by creation, not by active status
    const activeDeployment = deploymentNodes.find(
      (node: any) => node.state === 'ACTIVE' && node.workflowRun, // Must be active and linked to a workflow run
    );

    if (!activeDeployment) {
      core.warning(
        `DEBUG: No ACTIVE deployment with a linked workflow run found for '${pagesEnv}'. Outputting 'empty'.`,
      );
      core.setOutput('download-path', 'empty');
      return;
    }

    const run_id = activeDeployment.workflowRun.databaseId;
    if (!run_id) {
      core.setFailed(
        `DEBUG: Active deployment found (ID: ${activeDeployment.id}), but no workflow run databaseId linked. This should not happen if workflowRun existed.`,
      );
      return;
    }

    core.info(
      `DEBUG: Identified Active Deployment (ID: ${activeDeployment.id}) from state '${activeDeployment.state}', linked to Workflow Run ID: ${run_id}.`,
    );
    core.info(`DEBUG: Workflow Run URL: ${activeDeployment.workflowRun.url}`);

    // --- Use REST API to list and download artifacts for THIS specific run ---
    const artifactName = 'github-pages'; // Standard artifact name for Pages builds
    core.info(`DEBUG: Listing artifacts for workflow run ${run_id} to find '${artifactName}'...`);
    const {
      data: { artifacts },
    } = await octokit.rest.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id,
    });

    core.info(`DEBUG: Found ${artifacts.length} artifacts for run ${run_id}.`);
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
        `DEBUG: Could not find a '${artifactName}' artifact for workflow run ${run_id}.`,
      );
      return;
    }

    core.info(`DEBUG: Found Pages artifact: Name='${pagesArtifact.name}', ID=${pagesArtifact.id}.`);
    core.info(`DEBUG: Downloading artifact from pre-signed URL...`);

    const { url } = await octokit.rest.actions.downloadArtifact({
      owner,
      repo,
      artifact_id: pagesArtifact.id,
      archive_format: 'zip',
    });

    const downloadPath = 'deployed-site.zip';
    const writer = fs.createWriteStream(downloadPath);
    const response = await axios({ url, method: 'GET', responseType: 'stream' });
    response.data.pipe(writer);

    await new Promise<void>((resolve, reject) => {
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
