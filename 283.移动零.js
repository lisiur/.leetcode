/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p = 0;
    let q = 0;
    while (p < nums.length && q < nums.length) {
        while (p < nums.length && nums[p++] !== 0);
        while (q < nums.length && nums[q++] === 0);
        if (p < nums.length + 1 && q < nums.length + 1) {
            [nums[p-1], nums[q-1]] = [nums[q-1], nums[p-1]];
        }
    }
};
// @lc code=end

