/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  function reverse(a, i, j) {
    var t;
    while (i < j) {
      t = a[i];
      a[i] = a[j];
      a[j] = t;
      i += 1;
      j -= 1;
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length;
  let count = 0;
  for (let i = 0; count < nums.length; i++) {
    let start, prev;
    start = i;
    prev = nums[i];
    do {
      i = (i + k) % nums.length;
      [prev, nums[i]] = [nums[i], prev];
      count++;
    } while (start !== i);
  }
};
// @lc code=end

// var arr = [-1,-100,3,99]
// rotate(arr, 2)
// console.log(arr)


