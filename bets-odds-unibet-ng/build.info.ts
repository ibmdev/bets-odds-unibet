const fs = require('fs');
const utils = require('tslint/lib/utils');
const util = require('util');
const packageJsonPath = './package.json';
const packageJSONFile = require(packageJsonPath);
const exec = util.promisify(require('child_process').exec);

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
