/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var p = m - 1
  var q = n - 1
  var r = m + n - 1
  while (p >= 0 && q >= 0) {
    if (nums2[q] >= nums1[p]) {
      nums1[r--] = nums2[q--]
    } else {
      nums1[r--] = nums1[p--]
    }
  }
  if (p < 0) {
    while (r >= 0) {
      nums1[r--] = nums2[q--]
    }
  }
};

var merge = function(nums1, m, nums2, n) {
  if ( n < 1) {
    return
  }
  if ( m < 1) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i]
    }
    return 
  }
  if (nums1[m - 1] > nums2[n - 1]) {
    nums1[m + n - 1] = nums1[m - 1]
    merge(nums1, m - 1, nums2, n)
  } else {
    nums1[m + n - 1] = nums2[n - 1]
    merge(nums1, m, nums2, n - 1)
  }
};
// @lc code=end

var nums1 = [1,2,3,0,0,0]
var nums2 = [0,5,6]
merge(nums1, 3, nums2, 3)
console.log(nums1)
