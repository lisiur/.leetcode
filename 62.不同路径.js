/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var map = []
  for (let i = 0; i < n; ++i) {
    map[i] = []
    for (let j = 0; j < m; ++j) {
      if (i === 0) {
        map[i][j] = 1
      } else if (j === 0) {
        map[i][j] = 1
      } else {
        map[i][j] = map[i-1][j] + map[i][j-1]
      }
    }
  }
  return map[n-1][m-1]
};
// @lc code=end

console.log(uniquePaths(7, 3))