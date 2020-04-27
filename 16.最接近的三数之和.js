/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let rst = Infinity
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r] - target
      if (sum === 0) {
        return target
      } else if (sum > 0) {
        r--
      } else {
        l++
      }
      if (Math.abs(sum) < Math.abs(rst)) {
        rst = sum
      }
    }
  }
  return rst + target
};
// @lc code=end

