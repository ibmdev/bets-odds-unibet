const fileSystem = require('fs');
const i18nPath = './src/assets/i18n/';
const utilAsset = require('util');
const execAsset = utilAsset.promisify(require('child_process').exec);
const recursive = require('recursive-readdir');
const path = require('path');


const waitForAsset = ms => new Promise(res => setTimeout(res, ms));

async function assetCommitAndPush() {
  const branch = (await execAsset('git rev-parse --abbrev-ref HEAD')).stdout.toString().trim();
  const unstage = (await execAsset('git reset')).stdout.toString().trim();
  await waitForAsset(5000);
  const i18nFiles = await recursive(i18nPath).then(
    (files: any) => {
      return files
      .map((file: string) => {
      return file.split('\\').join('/');
      })
      .join(' ');
    },
    (error: any) => {
      console.error('something exploded', error);
    }
  );
  console.log('i18nFiles : ', i18nFiles);
  const stage = (await execAsset('git add ' + i18nFiles)).stdout.toString().trim();
  console.log('stage file' + i18nFiles, stage);
  await execAsset('git commit -m \"Release i18n \" ' + i18nFiles);
  await execAsset('git push origin ' + branch);
  console.log(`Commit et push sur la branche : '${branch}'`);
}


async function getAllI18N() {
  const packageRevision = (await execAsset('git rev-parse --short HEAD~2')).stdout.toString().trim();
  recursive(i18nPath,  (err: any, i18nFiles: any) => {
    if (err) { return; }
    i18nFiles.forEach((file: string) => {
      const newPath = file.split('_')[0] + '_' + packageRevision + '.json';
      fileSystem.renameSync(file, newPath );
    });
  });
}
getAllI18N();
assetCommitAndPush();
