/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  let set = new Set()
  const rst = []
  for (let i = 0; i < nums.length; i++) {
    let newTarget = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      let l = j + 1
      let r = nums.length - 1
      while (l < r) {
        let sum = nums[j] + nums[l] + nums[r]
        if (sum === newTarget) {
          if (!set.has(`${nums[i]},${nums[j]},${nums[l]}`)) {
            rst.push([nums[i], nums[j], nums[l], nums[r]])
            set.add(`${nums[i]},${nums[j]},${nums[l]}`)
          }
          l++
          r--
        } else if (sum < newTarget) {
          l++
        } else {
          r--
        }
      }
    }
  }
  return rst
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = fourSum;
// @after-stub-for-debug-end