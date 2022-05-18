module.exports = function (wallaby) {
  return {
    name: 'Martin\' Algorithm Testing Suite',
    files: [
      '*.js'
    ],
    tests: [
      '*.spec.js'
    ],
    testFramework: 'jest'
  }
}
