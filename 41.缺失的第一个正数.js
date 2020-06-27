/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0) nums[i] = nums.length + 1;
    }
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (num <= nums.length) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = firstMissingPositive;
// @after-stub-for-debug-end