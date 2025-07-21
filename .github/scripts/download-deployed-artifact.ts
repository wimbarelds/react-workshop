// .github/scripts/download-deployed-artifact.ts
import * as core from '@actions/core';
import * as github from '@actions/github';
import axios from 'axios';
import fs from 'fs';

async function run() {
  core.info('Starting download-deployed-artifact.ts script (Targeting Main Workflow Artifact)...');
  try {
    const token = core.getInput('github_token', { required: true });
    if (!token) {
      core.setFailed('GitHub token not supplied as input `github_token`.');
      return;
    }
    core.info('DEBUG: GitHub token successfully acquired via core.getInput().');

    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;
    const artifactName = 'github-pages'; // Standard artifact name for Pages builds

    // --- NEW LOGIC: Find the last successful workflow run of your main Pages deployment workflow ---
    // !!! IMPORTANT: Replace 'Your Main Pages Workflow Name' with the actual 'name:' of your production Pages workflow
    // You can find this name at the top of your main GitHub Pages YAML workflow file (e.g., .github/workflows/main.yml)
    const mainPagesWorkflowName = 169588973; // <<< REPLACE THIS

    core.info(
      `DEBUG: Searching for the last successful run of workflow '${mainPagesWorkflowName}' on branch 'main'...`,
    );

    const {
      data: { workflow_runs },
    } = await octokit.rest.actions.listWorkflowRunsForRepo({
      owner,
      repo,
      workflow_id: 169588973,
      branch: 'main', // Assuming your main site deploys from 'main' branch
      status: 'success', // Only consider successful runs
      per_page: 1, // Get only the latest successful one
    });

    const lastSuccessfulMainRun = workflow_runs[0];

    if (!lastSuccessfulMainRun) {
      core.warning(
        `DEBUG: No successful workflow run found for '${mainPagesWorkflowName}' on 'main' branch.`,
      );
      core.setOutput('download-path', 'empty');
      return;
    }

    core.info(
      `DEBUG: Found last successful run of main Pages workflow: #${lastSuccessfulMainRun.run_number} (ID: ${lastSuccessfulMainRun.id}).`,
    );
    core.info(`DEBUG: Workflow Run URL: ${lastSuccessfulMainRun.html_url}`); // Easier to debug

    // --- Now, list artifacts for THIS specific successful run ---
    core.info(
      `DEBUG: Listing artifacts for workflow run ${lastSuccessfulMainRun.id} to find '${artifactName}'...`,
    );
    const {
      data: { artifacts },
    } = await octokit.rest.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id: lastSuccessfulMainRun.id,
    });

    core.info(`DEBUG: Found ${artifacts.length} artifacts for run ${lastSuccessfulMainRun.id}.`);
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
        `DEBUG: Could not find a '${artifactName}' artifact for workflow run ${lastSuccessfulMainRun.id}. This run likely didn't upload the Pages artifact.`,
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

    core.info(`DEBUG: Downloading artifact from pre-signed URL.`);
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
