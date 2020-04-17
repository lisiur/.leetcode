/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const base = 2
  let arrA = Array.from(a, n => +n).reverse()
  let arrB = Array.from(b, n => +n).reverse()

  // 保证 arrA 最长
  if (arrA.length < arrB.length) {
    [arrA, arrB] = [arrB, arrA]
  }

  let arrC = []
  let o = 0
  let i = 0
  for (; i < arrB.length; i++) {
    const s = arrA[i] + arrB[i] + o
    o = 0
    if (s >= base) {
      o = 1
    }
    arrC.push(s % base)
  }
  for (; i < arrA.length; i++) {
    const s = arrA[i] + o
    o = 0
    if (s >= base) {
      o = 1
    }
    arrC.push(s % base)
  }
  if (o > 0) {
    arrC.push(o)
  }
  return arrC.reverse().join('')
};
// @lc code=end

console.log(addBinary("11", "1"))

