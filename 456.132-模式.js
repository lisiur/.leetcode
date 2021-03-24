/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    if (nums.length <= 2) return false
    let stack = [nums[nums.length - 1]]
    let max_2 = -Infinity
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < max_2) return true
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            max_2 = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
};
// @lc code=end
