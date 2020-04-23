/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = new Map()
  const set = new Set()
  let rst = 0
  for (let c of s) {
    if (map.has(c)) {
      rst += 2
      map.delete(c)
      set.delete(c)
    } else {
      map.set(c, 1)
      set.add(c)
    }
  }
  if (set.size > 0) {
    rst += 1
  }
  return rst
};
// @lc code=end

