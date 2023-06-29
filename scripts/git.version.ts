import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { versions } from './../projects/menphys-view/src/environments/versions';
import { dedent } from 'tslint/lib/utils';

async function createVersionsFile(filename: string) {
  const revision = execSync('git rev-parse --short HEAD').toString().trim();
  const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  const total = Number(execSync("git rev-list --count HEAD").toString().trim());
  const longSHA = execSync("git rev-parse HEAD").toString().trim();
  const shortSHA = execSync("git rev-parse --short HEAD").toString().trim();
  const authorName = execSync("git log -1 --pretty=format:'%an'").toString().trim();
  const commitTime = execSync("git log -1 --pretty=format:'%cd'").toString().trim();
  const commitMsg = execSync("git log -1 --pretty=%B").toString().trim();

  const npmVersions = process.env[ 'npm_package_version' ].split('.').splice(0, 2).join('.');
  const content = dedent`
      // this file is automatically generated by
      export const versions = {
        version: '${ npmVersions }.${ total}',
        revision: '${ revision }',
        branch: '${ branch }',
        shortSHA: '${ shortSHA }',
        SHA: '${ longSHA }',
        lastCommitAuthor: ${ authorName },
        lastCommitTime: ${ commitTime },
        lastCommitMessage: '${ commitMsg }',
        copyright: 'Copyright (c) 2023 Lucas Ribeiro'
      };`;

  writeFileSync(filename, content, { encoding: 'utf8' });
}

createVersionsFile('projects/menphys-view/src/environments/versions.ts');
