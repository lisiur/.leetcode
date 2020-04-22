/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = Array.from(s)
  let i = 0
  let j = s.length - 1
  const set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'])
  while (i < j) {
    while (i < j && !set.has(s[i])) {
      i++
    }
    while (i < j && !set.has(s[j])) {
      j--
    }
    if (i < j) {
      [s[i], s[j]] = [s[j], s[i]]
      i++
      j--
    }
  }
  return s.join('')
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseVowels;
// @after-stub-for-debug-end