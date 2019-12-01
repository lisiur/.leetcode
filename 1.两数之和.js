/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = new Map()
  var i = 0
  for (; i < nums. length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i]
    } else {
      map.set(target - nums[i], i)
    }
  }
  return [-1, -1]
};
// @lc code=end
var nums = [2, 7, 11, 15]
var target = 9
var res = twoSum(nums, target)
console.log(res)

