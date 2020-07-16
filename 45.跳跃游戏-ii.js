/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let currentEnd = 0
    let nextMax = 0
    let steps = 0
    for (let i = 0 ; i < nums.length - 1; i++) {
        nextMax = Math.max(nextMax, nums[i] + i)
        if (i === currentEnd) {
            currentEnd = nextMax
            steps ++
        }
    }
    return steps
};
// @lc code=end

