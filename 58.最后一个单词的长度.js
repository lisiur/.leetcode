/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let prev = 0
  let curr = 0
  for (let i = 0; i < s.length;) {
    while(i < s.length && s[i] === ' ') {
      prev = curr
      i++
    }
    curr = 0
    while(i < s.length && s[i] !== ' ') {
      curr += 1
      i++
    }
  }
  return curr || prev
};
// @lc code=end

console.log(lengthOfLastWord(''))
