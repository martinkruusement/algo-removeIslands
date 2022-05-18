const fs = require('fs')
const YAML = require('yaml')

const file = fs.readFileSync('./test-cases.yml', 'utf8')
let cases = YAML.parse(file)

module.exports = cases
