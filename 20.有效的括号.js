/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  const stack = []
  for (let c of s) {
    if (['(', '[', '{'].includes(c)) {
      stack.push(c)
    } else {
      if (stack.length === 0) {
        return false
      }
      if (c === ')' && stack[stack.length-1] === '(') {
        stack.length -= 1
      }
      if (c === ']' && stack[stack.length-1] === '[') {
        stack.length -= 1
      }
      if (c === '}' && stack[stack.length-1] === '{') {
        stack.length -= 1
      }
    }
  }
  return stack.length === 0
};
// @lc code=end

isValid('()')