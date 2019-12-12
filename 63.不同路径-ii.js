/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  m = obstacleGrid.length
  if (m === 0) {
    return 0
  }
  n = obstacleGrid[0].length
  if (obstacleGrid[0][0] === 1) {
    return 0
  }

  for (let i = 0, b = false; i < n; ++i) {
    if (obstacleGrid[0][i] === 1) {
      b = true
    }
    obstacleGrid[0][i] = b ? 0 : -1
  }

  for (let i = 0, b = false; i < m; ++i) {
    if (obstacleGrid[i][0] === 1) {
      b = true
    }
    obstacleGrid[i][0] = b ? 0 : -1
  }

  for (let i = 1; i < m; ++i) {
    for (let j = 1; j < n; ++j) {
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i][j-1] + obstacleGrid[i-1][j]
      }
    }
  }

  return -obstacleGrid[m-1][n-1]
};
// @lc code=end

