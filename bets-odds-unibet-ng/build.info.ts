const fs = require('fs');
const utils = require('tslint/lib/utils');
const util = require('util');
const packageJsonPath = './package.json';
const packageJSONFile = require(packageJsonPath);
const exec = util.promisify(require('child_process').exec);

const waitForBuildInfo = ms => new Promise(res => setTimeout(res, ms));

async function buildInfoCommitAndPush(filename: string) {
  const branch = (await exec('git rev-parse --abbrev-ref HEAD')).stdout.toString().trim();
  const unstage = (await exec('git reset')).stdout.toString().trim();
  console.log('unstage all files : ', unstage);
  await waitForBuildInfo(5000);
  const stage = (await exec('git add ' + filename)).stdout.toString().trim();
  console.log('stage file' + filename, stage);
  await exec('git commit -m \"Release build-info \" ' + filename);
  await exec('git push origin ' + branch);
  console.log(`Commit et push sur la branche : '${branch}'`);
}

async function creerFichierVersion(filename: string) {
  const revision = (await exec('git rev-parse --short HEAD')).stdout.toString().trim();
  const branch = (await exec('git rev-parse --abbrev-ref HEAD')).stdout.toString().trim();

  console.log(`version: '${process.env.npm_package_version}', revision: '${revision}', branch: '${branch}'`);

  const content = utils.dedent`
     export const versions = {
        version: '${packageJSONFile.version}',
        revision: '${revision}',
        branch: '${branch}'
        // tslint:disable-next-line:eofline
      };`;

  fs.writeFileSync(filename, content, {encoding: 'utf8'});
}
creerFichierVersion('src/environments/build_info.ts');
buildInfoCommitAndPush('src/environments/build_info.ts');
