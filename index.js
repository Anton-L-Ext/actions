const core = require('@actions/core')
const gihub = require('@actions/github')

try {
  const nameToGreet = core.getInput('who-to-greet')
  const time = (new Date()).toDateString();

  console.log(`Hello ${nameToGreet}`)
  core.setOutput('time', time);

  const payload = JSON.stringify(gihub.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`)
} catch (error) {
  core.setFailed(error.message)
}