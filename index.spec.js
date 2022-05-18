/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

const alg = require('./index.js')
const cases = require('./load-tests.js')
describe('MARTIN\'S ALGORITHM TEST SUITE', () => {
  it('ALL SYSTEMS FULLY OPERATIONAL', () => {
    expect(typeof alg).toBe('function')
  })
  it('GOOD LUCK!', () => { return new Promise((resolve) => { resolve() }) })
})

describe('TEST CASES:', () => {
  if (cases.length > 0) {
    let result = alg(cases[0].in)
    let failed = result !== cases[0].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m0\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[0].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[0].out + extras + '\x1b[2m', () => {
      cases[0].in // ?
      expect(result).toStrictEqual(cases[0].out)
    })
  }
  if (cases.length > 1) {
    let result = alg(cases[1].in)
    let failed = result !== cases[1].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m1\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[1].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[1].out + extras + '\x1b[2m', () => {
      cases[1].in // ?
      expect(result).toStrictEqual(cases[1].out)
    })
  }
  if (cases.length > 2) {
    let result = alg(cases[2].in)
    let failed = result !== cases[2].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m2\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[2].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[2].out + extras + '\x1b[2m', () => {
      cases[2].in // ?
      expect(result).toStrictEqual(cases[2].out)
    })
  }
  if (cases.length > 3) {
    let result = alg(cases[3].in)
    let failed = result !== cases[3].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m3\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[3].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[3].out + extras + '\x1b[2m', () => {
      cases[3].in // ?
      expect(result).toStrictEqual(cases[3].out)
    })
  }
  if (cases.length > 4) {
    let result = alg(cases[4].in)
    let failed = result !== cases[4].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m4\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[4].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[4].out + extras + '\x1b[2m', () => {
      cases[4].in // ?
      expect(result).toStrictEqual(cases[4].out)
    })
  }
  if (cases.length > 5) {
    let result = alg(cases[5].in)
    let failed = result !== cases[5].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m5\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[5].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[5].out + extras + '\x1b[2m', () => {
      cases[5].in // ?
      expect(result).toStrictEqual(cases[5].out)
    })
  }
  if (cases.length > 6) {
    let result = alg(cases[6].in)
    let failed = result !== cases[6].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m6\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[6].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[6].out + extras + '\x1b[2m', () => {
      cases[6].in // ?
      expect(result).toStrictEqual(cases[6].out)
    })
  }
  if (cases.length > 7) {
    let result = alg(cases[7].in)
    let failed = result !== cases[7].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m7\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[7].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[7].out + extras + '\x1b[2m', () => {
      cases[7].in // ?
      expect(result).toStrictEqual(cases[7].out)
    })
  }
  if (cases.length > 8) {
    let result = alg(cases[8].in)
    let failed = result !== cases[8].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m8\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[8].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[8].out + extras + '\x1b[2m', () => {
      cases[8].in // ?
      expect(result).toStrictEqual(cases[8].out)
    })
  }
  if (cases.length > 9) {
    let result = alg(cases[9].in)
    let failed = result !== cases[9].out
    let extras = ''
    if (failed) {
      extras += `  \x1b[1m\x1b[31m${result}\x1b[0m  `
    }
    test('\x1b[0m\x1b[1m9\x1b[0m\x1b[2m:\x1b[0m \x1b[1m' + cases[9].in + '\x1b[0m\x1b[2m ⇒ \x1b[0m\x1b[1m' + cases[9].out + extras + '\x1b[2m', () => {
      cases[9].in // ?
      expect(result).toStrictEqual(cases[9].out)
    })
  }
})
