const utilUpdate = require('util');
const execUpdate = utilUpdate.promisify(require('child_process').exec);

const attente = ms => new Promise(res => setTimeout(res, ms));

async function discard(filename: string) {
  await execUpdate('git checkout ' + filename);
}

async function updateVersionPatch() {
  await execUpdate('npm version patch --force');
}
async function updateVersionMinor() {
  await execUpdate('npm version minor --force');
}
async function updateVersionMajor() {
  await execUpdate('npm version major --force');
}
async function commitAndPush(filename: string) {
  const branch = (await execUpdate('git rev-parse --abbrev-ref HEAD')).stdout.toString().trim();
  const unstage = (await execUpdate('git reset')).stdout.toString().trim();
  console.log('unstage all files : ', unstage);
  await attente(5000);
  const stage = (await execUpdate('git add ' + filename)).stdout.toString().trim();
  console.log('stage file' + filename, stage);
  await execUpdate('git commit -m \"Release package.json\" ' + filename);
  await execUpdate('git push origin ' + branch);
  console.log(`Commit et push sur la branche : '${branch}'`);
}
discard('package.json');
updateVersionPatch();
commitAndPush('package.json package-lock.json');
