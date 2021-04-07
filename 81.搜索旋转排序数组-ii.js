/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    if (nums.length === 0) return false
    if (nums.length === 1) return nums[0] === target
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) return true
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            left++
            right--
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[nums.length - 1]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
};
// @lc code=end

