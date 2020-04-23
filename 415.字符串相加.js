/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
function reverseStr(s) {
  return s.split('').reverse().join('')
}
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let str = ''
  let acc = 0
  num1 = reverseStr(num1)
  num2 = reverseStr(num2)
  if (num1.length > num2.length) {
    [num1, num2] = [num2, num1]
  }
  for (let i = 0; i < num1.length; i++) {
    const a = parseInt(num1[i])
    const b = parseInt(num2[i])
    const s = a + b + acc
    str += s % 10
    acc = ~~(s / 10)
  }
  for (let i = num1.length; i < num2.length; i++) {
    const b = parseInt(num2[i])
    const s = b + acc
    str += s % 10
    acc = ~~(s / 10)
  }
  if (acc > 0) {
    str += '1'
  }
  return reverseStr(str)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addStrings;
// @after-stub-for-debug-end