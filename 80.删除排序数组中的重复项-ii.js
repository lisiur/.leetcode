/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0
    let maxN = 2
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === nums[i]) {
            maxN--
            if (maxN === 1) {
                i++
                nums[i] = nums[j]
            }
        } else {
            i++
            nums[i] = nums[j]
            maxN = 2
        }
    }
    return i + 1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end