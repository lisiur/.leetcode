/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  return num > 0 && (num & (num - 1)) === 0 && (num & 0xaaaaaaaa) === 0
};
// @lc code=end

