const yaml = require('js-yaml');

function parse(strings, ...exps) {
  return yaml.load(strings.raw.join(''));
}

module.exports = parse;

module.exports.parse = parse;
