/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i - k]
        max = Math.max(sum, max)
    }
    return max / k
};
// @lc code=end

