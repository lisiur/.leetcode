/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const a = dividend >= 0 ? 1 : -1
  const b = divisor >= 0 ? 1 : -1
  if (dividend < 0) {
    dividend = -dividend
  }
  if (divisor < 0) {
    divisor = -divisor
  }
};
// @lc code=end

