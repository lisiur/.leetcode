/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ret = []
    function func(i, arr) {
        if (i === nums.length) {
            ret.push(arr)
            return
        }
        func(i+1, arr)
        func(i+1, [...arr, nums[i]])
    }
    func(0, [])
    return ret
};
// @lc code=end

