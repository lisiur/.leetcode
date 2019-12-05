/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0, j = nums.length - 1
  while (i <= j) {
    while (i <= j && nums[i] !== val) {
      ++i
    }
    while (i <= j && nums[j] === val) {
      --j
    }
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      ++i
      --j
    }
  }
  return i
};
// @lc code=end

var nums = [2]
var val = 3
var res = removeElement(nums, val)
console.log(res, nums)

