/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (true) {
    if (l === r) {
      if (target > nums[l]) {
        return l + 1
      } else {
        return l
      }
    }
    let i = Math.floor((r - l) / 2) + l
    if (target === nums[i]) {
      return i
    } else if (target < nums[i]) {
      r = i
    } else {
      l = i + 1
    }
  }
};
// @lc code=end

console.log(searchInsert([1,3,5,6], 0))

