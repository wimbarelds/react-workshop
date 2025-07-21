import * as core from '@actions/core';
import * as github from '@actions/github';
import axios from 'axios';
import fs from 'fs';

/**
 * Main function to run the script logic.
 */
async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;
    const pagesEnv = 'github-pages';

    core.info(`Finding active deployment for the '${pagesEnv}' environment...`);
    const { data: deployments } = await octokit.rest.repos.listDeployments({
      owner,
      repo,
      environment: pagesEnv,
    });

    // Find the latest deployment that was triggered by a workflow run
    const activeDeployment = deployments.find(
      (d) => d.payload && typeof d.payload === 'object' && 'workflow_run' in d.payload,
    );

    if (!activeDeployment) {
      core.warning(
        `No active deployment found for '${pagesEnv}'. This may be the first deployment.`,
      );
      // Set an output to indicate no file was downloaded.
      core.setOutput('download-path', 'empty');
      return;
    }

    core.info(`Found active deployment ID: ${activeDeployment.id}`);
    const run_id = (activeDeployment.payload as { workflow_run: { id: number } }).workflow_run.id;
    core.info(`Associated Workflow Run ID: ${run_id}`);

    const {
      data: { artifacts },
    } = await octokit.rest.actions.listWorkflowRunArtifacts({
      owner,
      repo,
      run_id,
    });

    const pagesArtifact = artifacts.find((a) => a.name === pagesEnv);
    if (!pagesArtifact) {
      core.setFailed(`Could not find a '${pagesEnv}' artifact for run ${run_id}.`);
      return;
    }

    core.info(`Downloading artifact '${pagesArtifact.name}' (ID: ${pagesArtifact.id})...`);
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

    core.info(`Successfully downloaded deployed site to ${downloadPath}`);
    // Set the path of the downloaded file as an output for the next step.
    core.setOutput('download-path', downloadPath);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed('An unknown error occurred');
    }
  }
}

run();
