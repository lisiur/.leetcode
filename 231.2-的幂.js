/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let a = 1
  while (n >= a) {
    if (n === a) {
      return true
    }
    a = a * 2
  }
  return false
};
// @lc code=end

