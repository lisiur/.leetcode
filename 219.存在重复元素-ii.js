/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const ids = map.get(nums[i])
      if (i - ids[ids.length - 1] <= k) {
        return true
      } else {
        ids.push(i)
      }
    } else {
      map.set(nums[i], [i])
    }
  }
  return false
};
// @lc code=end

