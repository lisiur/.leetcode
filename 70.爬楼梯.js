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
var climbStairs = function(n) {
  if (n === 0) {
    return 1
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }

  var a = 1, b = 2, c
  n -= 2
  while (n-- > 0) {
    c = a + b
    a = b
    b = c
  }
  return c
};
// @lc code=end

var n = 1
var res = climbStairs(n)
console.log(res)
