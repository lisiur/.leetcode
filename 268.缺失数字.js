/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  function quickSort(arr, start, end) {
    if (start < end) {
      let l = start
      let r = end
      let x = arr[l]
      while (l < r) {
        while (r > l && arr[r] >= x) {
          r--
        }
        if (r > l) {
          arr[l++] = arr[r]
        }
        while (r > l && arr[l] < x) {
          l++
        }
        if (r > l) {
          arr[r--] = arr[l]
        }
      }
      arr[l] = x
      quickSort(arr, start, l - 1)
      quickSort(arr, l + 1, end)
    }
  }
  quickSort(nums, 0, nums.length - 1)
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return -1
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = missingNumber;
// @after-stub-for-debug-end