/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return [1,1,2][n]
  }
  let a = 1, b = 2, c;
  n -= 2;
  while (n--) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};
// @lc code=end

var n = 1;
var res = climbStairs(n);
console.log(res);

// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end