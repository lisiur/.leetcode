/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (!nums.length) return 0;
    let left = 0;
    let right = 0;
    let ret = Infinity;
    let sum = 0;
    while (right < nums.length) {
        while (sum < s && right < nums.length) {
            sum += nums[right++];
        }
        while (sum >= s && left < right) {
            ret = Math.min(ret, right - left);
            sum -= nums[left++];
        }
    }
    return ret === Infinity ? 0 : ret;
};
// @lc code=end

