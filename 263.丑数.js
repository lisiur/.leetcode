/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num <= 0) {
    return false
  }
  while (num !== 1) {
    if (num % 5 === 0) {
      num /= 5
    } else if (num % 3 === 0 ) {
      num /= 3
    } else if (num % 2 === 0) {
      num /= 2
    } else {
      return false
    }
  }
  return true
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isUgly;
// @after-stub-for-debug-end