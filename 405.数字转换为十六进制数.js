/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num === 0) {
    return '0'
  }
  let n = Math.abs(num)
  let arr = new Array(32).fill(0)
  let i = 0
  let rst = ''
  while (n) {
    arr[i++] = n % 2
    n = ~~(n / 2)
  }
  if (num < 0) {
    for (let i = 0; i < 32; i++) {
      arr[i] = 1 - arr[i]
    }
    for (let i = 0; i < 32; i++) {
      arr[i] = arr[i] + 1
      if (arr[i] <= 1) {
        break
      } else {
        arr[i] = 0
      }
    }
  }
  for (let i = 31; i >= 0; i -= 4) {
    let [a1, a2, a3, a4] = [arr[i], arr[i - 1], arr[i - 2], arr[i - 3]]
    const ox = a1 * 8 + a2 * 4 + a3 * 2 + a4
    if (ox > 9) {
      rst += String.fromCharCode('a'.charCodeAt(0) + (ox - 10))
    } else {
      if (ox === 0 && rst === '') {
      } else {
        rst += ox
      }
    }
  }
  return rst
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = toHex;
// @after-stub-for-debug-end