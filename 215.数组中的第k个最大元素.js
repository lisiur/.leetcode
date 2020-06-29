/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    k = nums.length - k;
    quicksort(nums, 0, nums.length - 1, k);
    return nums[k];
};

/**
 * @param {number[]} arr
 * @param {number} l
 * @param {number} r
 */
function quicksort(arr, l, r, k) {
    if (l >= r) return;
    let t = l;
    let ol = l;
    let or = r;
    while (l < r) {
        while (l < r && arr[r] > arr[t]) r--;
        if (l < r) {
            [arr[t], arr[r]] = [arr[r], arr[t]];
            t = r;
        }
        while (l < r && arr[l] <= arr[t]) l++;
        if (l < r) {
            [arr[t], arr[l]] = [arr[l], arr[t]];
            t = l;
        }
    }
    if (l === k) return;
    else if (l > k) quicksort(arr, ol, l - 1, k);
    else quicksort(arr, l + 1, or, k);
}
// @lc code=end
