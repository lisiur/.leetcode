/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let l = 0
  let r = num + 1
  while (l <= r) {
    let m = ~~((l + r) / 2)
    let p = m * m
    if (p === num) {
      return true
    } else if (p < num) {
      l = m + 1
    } else {
      r = m - 1
    }
  }
  return false
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPerfectSquare;
// @after-stub-for-debug-end