/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let set = new Set()
  const rst = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        if (!set.has(`${nums[i]},${nums[l]}`)) {
          rst.push([nums[i], nums[l], nums[r]])
          set.add(`${nums[i]},${nums[l]}`)
        }
        l++
      } else if (sum < 0) {
        l++
      } else {
        r--
      }
    }
  }
  return rst
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end