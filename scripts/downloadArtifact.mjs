#!/usr/bin/env node

import { mkdir, writeFile } from 'fs/promises';
import _ from 'lodash';
import { dirname, resolve } from 'path';
import { Octokit } from 'octokit';
import { fileURLToPath } from 'url';

const owner = 'Contrast-Security-OSS';
const repo = 'react-test-bench';

const [, , branch = 'main'] = process.argv;
console.log('Downloading artifact for branch %s...', branch);

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const {
  data: { artifacts },
} = await octokit.rest.actions.listArtifactsForRepo({ owner, repo });

const filtered = _.filter(artifacts, (artifact) =>
  artifact.name.includes(`-${branch}-`)
);
const sorted = _.sortBy(filtered, (artifact) =>
  Date.parse(artifact.updated_at)
);
const { id } = _.last(sorted);

const { data } = await octokit.rest.actions.downloadArtifact({
  owner,
  repo,
  artifact_id: id,
  archive_format: 'zip',
});

const filename = resolve(
  fileURLToPath(import.meta.url),
  '..',
  '..',
  'artifacts',
  `${branch}.zip`
);

await mkdir(dirname(filename), { recursive: true });
await writeFile(filename, Buffer.from(data));
console.log('Artifact written to %s', filename);
