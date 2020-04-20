/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  const dp = new Array(nums.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = [0, 0]
  }

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] >= 0) {
      dp[i][0] = Math.max(nums[i - 1], dp[i - 1][0] * nums[i - 1])
      dp[i][1] = dp[i - 1][1] * nums[i - 1]
    } else {
      dp[i][1] = Math.min(nums[i - 1], dp[i - 1][0] * nums[i - 1])
      dp[i][0] = dp[i - 1][1] * nums[i - 1]
    }
  }
  if (nums.length === 1 && nums[0] < 0) {
    return nums[0]
  }
  return Math.max(...dp.slice(1).map(it => it[0]))
};
// @lc code=end

