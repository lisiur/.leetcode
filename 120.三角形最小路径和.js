/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const dp = new Array(triangle.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(triangle.length + 1).fill(Infinity)
  }
  dp[0].fill(0)
  for (let i = 1; i <= triangle.length; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i - 1][j - 1]
    }
  }
  return Math.min(...dp[triangle.length])
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minimumTotal;
// @after-stub-for-debug-end

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])