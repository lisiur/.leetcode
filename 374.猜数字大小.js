/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let l = 1
  let r = n
  while (l <= r) {
    let m = ~~((l + r) / 2)
    const rst = guess(m)
    if (rst === -1) {
      r = m - 1
    } else if (rst === 1) {
      l = m + 1
    } else {
      return m
    }
  }
  return 0
};
// @lc code=end

