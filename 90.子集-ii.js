/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort()
    let ret = [[], [nums[0]]]
    let lastlen = 1
    let end = 0
    for (let i = 1; i < nums.length; i++) {
        end = ret.length
        if (nums[i] !== nums[i-1]) {
            lastlen = ret.length
            for (let j = 0; j < end; j++) {
                ret.push(ret[j].concat([nums[i]]))
            }
        } else {
            for (let j = end - lastlen; j < end; j++) {
                ret.push(ret[j].concat([nums[i]]))
            }
        }
    }
    return ret
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = subsetsWithDup;
// @after-stub-for-debug-end