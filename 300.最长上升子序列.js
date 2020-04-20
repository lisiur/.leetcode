/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  const dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(max, dp[j] + 1)
      }
    }
    dp[i] = max
  }
  return Math.max(...dp)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = lengthOfLIS;
// @after-stub-for-debug-end