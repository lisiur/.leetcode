/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
function Token(token) {
  this.token = token
  this.i = 0
  this.l = this.token.length
}

Token.prototype.done = function() {
  return this.i === this.l
}

Token.prototype.peek = function() {
  return this.token[this.i + 1]
}

Token.prototype.current = function() {
  return this.token[this.i]
}

Token.prototype.consume = function () {
  this.i += 1
}

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  const token = new Token(s)
  let value = 0
  while(!token.done()) {
    const curr = token.current()
    const next = token.peek()
    let currVal = 0
    if (curr === 'I' && next === 'V') {
      currVal = 4
    } else if (curr === 'I' && next === 'X') {
      currVal = 9
    } else if (curr === 'X' && next === 'L') {
      currVal = 40
    } else if (curr === 'X' && next === 'C') {
      currVal = 90
    } else if (curr === 'C' && next === 'D') {
      currVal = 400
    } else if (curr === 'C' && next === 'M') {
      currVal = 900
    } else {
      value += map.get(curr)
      token.consume()
    }
    if (currVal > 0) {
      value += currVal
      token.consume()
      token.consume()
    }
  }
  return value
};

// @lc code=end

console.log(romanToInt('IX'))