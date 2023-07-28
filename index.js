const core = require('@actions/core');
const parse = require('pg-connection-string').parse;

const connectionString = core.getInput('connection-string');
let config = parse(connectionString)

if (!config.port) config.port = 5432;

for (let part in config) {
  if (part === 'password') {
    core.setSecret(config[part]);
  }

  core.setOutput(part, config[part]);
}
