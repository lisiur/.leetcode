/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  function inner(i, lastMax, max) {
    if (i === nums.length) return max
    lastMax = nums[i] + Math.max(lastMax, 0)
    max = Math.max(lastMax, max)
    return inner(i + 1, lastMax, max)
  }
  return inner(0, -Infinity, -Infinity)
};

var maxSubArray = function(nums) {
  var max = -Infinity
  var lastMax = -Infinity
  for (let num of nums) {
    lastMax = num + Math.max(lastMax, 0)
    max = Math.max(lastMax, max)
  }
  return max
}
// @lc code=end

const nums = [-2,1,-3,4,-1,2,1,-5,4]
const res = maxSubArray(nums)
console.log(res)
