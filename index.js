const cases = require('./load-tests.js')

function solution (_matrix) {
  let matrix = [...JSON.parse(JSON.stringify(_matrix))]
  if (!matrix.length || !matrix[0].length) {
    return matrix
  }

  let edges = {}
  for (let _y in matrix) {
    let y = parseInt(_y)
    let isHorizontalEdge = y === 0 || y === matrix.length - 1
    for (let _x in matrix[y]) {
      let x = parseInt(_x)
      let isVerticalEdge = x === 0 || x === matrix[y].length - 1
      let key = toKey(x, y)
      if ((isHorizontalEdge || isVerticalEdge) && matrix[y][x]) {
        key
        edges[key] = true
      }
    }
  }

  for (let key of Object.keys(edges)) {
    let { x, y } = fromKey(key)
    if (matrix[y][x] === 1) {
      processGrid(fromKey(key), matrix)
    }
  }

  return matrix
}

function processGrid ({ x, y }, matrix) {
  matrix[y][x] = 0
  let moves = getPossibleMoves({ x, y }, matrix)
  for (let move of moves) {
    console.log(move)
    matrix[move.y][move.x] = 0
  }
  for (let move of moves) {
    processGrid(move, matrix)
  }
}

function getPossibleMoves ({ x, y }, matrix) {
  let T = { y: y - 1, x }
  let B = { y: y + 1, x }
  let L = { x: x - 1, y }
  let R = { x: x + 1, y }
  return [T, B, L, R].filter(move => validateGrid(move, matrix) && matrix[move.y][move.x] === 1)
}

function validateGrid ({ x, y }, matrix) {
  let valid = true
  if (x < 0) { valid = false }
  if (y < 0) { valid = false }
  if (y > matrix.length - 1) { valid = false }
  if (x > matrix[0].length - 1) { valid = false }
  return valid
}
function toKey (x, y) {
  return `${x},${y}`
}
function fromKey (key) {
  let [x, y] = key.split(',').map(coord => parseInt(coord))
  return { x, y }
}

// eslint-disable-next-line no-unused-expressions
cases[0].in
// eslint-disable-next-line no-unused-expressions
JSON.stringify(solution(cases[0].in)) === JSON.stringify(cases[0].out)
solution(cases[0].in[0])
solution(cases[0].in[1])
solution(cases[0].in[2])
cases[0].out[0]
cases[0].out[1]
cases[0].out[2]

module.exports = solution
