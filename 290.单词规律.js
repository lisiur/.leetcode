/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const map = new Map()
  const set = new Set()
  const arr = str.split(' ')
  if (arr.length !== pattern.length) {
    return false
  }
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (arr[i] !== map.get(pattern[i])) {
        return false
      }
    } else {
      map.set(pattern[i], arr[i])
      if (set.has(arr[i])) {
        return false
      } else {
        set.add(arr[i])
      }
    }
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordPattern;
// @after-stub-for-debug-end