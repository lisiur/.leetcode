/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
function getAll(n, m) {
  let rst = []
  function all(n, m, pre = '') {
    if (m > n) {
      return
    }
    if (m === 0) {
      rst.push(pre + new Array(n).fill(0).join(''))
      return
    }
    if (m === n) {
      rst.push(pre + new Array(n).fill(1).join(''))
      return
    }
    all(n - 1, m - 1, pre + '1')
    all(n - 1, m, pre + '0')
  }
  all(n, m)
  return rst
}
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  let rst = []
  function fn(h, m) {
    if (m < 0) {
      return
    }
    if (h <= 4 && m <= 6) {
      let hs = getAll(4, h)
      let ms = getAll(6, m)
      for (let i = 0; i < hs.length; i++) {
        const formatH = parseInt(hs[i], 2)
        if (formatH > 11) {
          continue
        }
        for (let j = 0; j < ms.length; j++) {
          let formatM = parseInt(ms[j], 2)
          if (formatM > 59) {
            continue
          }
          formatM = formatM.toString().padStart(2, '0')
          rst.push(`${formatH}:${formatM}`)
        }
      }
    }
    fn(h + 1, m - 1)
  }
  fn(0, num)
  return rst
};
// @lc code=end

const res = readBinaryWatch(7)
console.log(res)