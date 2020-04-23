/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (let n of magazine) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }
  for (let n of ransomNote) {
    if (!map.has(n)) {
      return false
    }
    map.set(n, map.get(n) - 1)
    if (map.get(n) === 0) {
      map.delete(n)
    }
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canConstruct;
// @after-stub-for-debug-end