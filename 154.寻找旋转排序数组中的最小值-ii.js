/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums[0] < nums[nums.length - 1]) {
        return nums[0]
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[right] > nums[mid]) {
            right = mid
        } else if (nums[right] < nums[mid]) {
            left = mid + 1
        } else {
            right--
        }
    }
    return nums[left]
}

// @lc code=end


// @after-stub-for-debug-begin
module.exports = findMin;
// @after-stub-for-debug-end