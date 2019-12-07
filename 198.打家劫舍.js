/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) {
    return 0
  }
  let last = [nums[0], 0]
  for (let i = 1; i < nums.length; ++i) {
    let a = last[1] + nums[i]
    let b = Math.max(...last)
    last = [a, b]
  }
  return Math.max(...last)
};
// @lc code=end

var input = [2,7,9,3,1]
var output = rob(input)
console.log(output)
