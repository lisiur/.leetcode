/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  var p = 0, q = p + 1;
  while(q < nums.length) {
    if (nums[q] !== nums[p]) {
      p += 1;
      nums[p] = nums[q];
    }
    q += 1;
  }
  nums.length = p + 1;
  return nums.length;
};
// @lc code=end

// var nums = [0,0,1,1,1,2,2,3,3,3];
// removeDuplicates(nums);
// console.log(nums);

