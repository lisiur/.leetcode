/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let ret = findMin$(nums, 0, nums.length - 1)
    return ret
};

var findMin$ = function(nums, start, end) {
    if (start === end) return nums[start]
    let mid = Math.floor((start + end) / 2)
    if (nums[start] <= nums[mid]) {
        return Math.min(nums[start], findMin$(nums, mid + 1, end))
    } else {
        return findMin$(nums, start + 1, mid)
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end