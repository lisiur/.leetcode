/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let n = 0
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            if (i === 0) {
                nums[i] = -1e5
                n++
            } else {
                if (nums[i-1] > nums[i+1]) {
                    nums[i+1] = nums[i]
                } else {
                    nums[i] = nums[i-1]
                }
                n++
            }
            if (n > 1) return false
        }
    }
    return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = checkPossibility;
// @after-stub-for-debug-end