/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0
  let r = x
  for (; ;) {
    if (l === r) {
      if (l * l <= x) {
        return l
      } else {
        return l - 1
      }
    }
    let i = Math.floor((l + r) / 2)
    let s = i * i
    if (s === x) {
      return i
    } else if (s > x) {
      r = i
    }  else {
      l = i + 1
    }
  }
};
// @lc code=end

console.log(mySqrt(0))

