/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sortedNUms = nums.map(it => it.toString()).sort((a, b) => {
        return (a + b > b + a) ? -1 : 1
    })
    if (sortedNUms[0] === '0') {
        return '0'
    } else {
        return sortedNUms.join('')
    }
};
// @lc code=end
