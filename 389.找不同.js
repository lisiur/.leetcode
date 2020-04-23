/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = new Map()
  for (let n of s) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1)
    } else {
      map.set(n, 1)
    }
  }
  for (let n of t) {
    if (!map.has(n)) {
      return n
    }
    map.set(n, map.get(n) - 1)
    if (map.get(n) === 0) {
      map.delete(n)
    }
  }
  return ''
};
// @lc code=end

