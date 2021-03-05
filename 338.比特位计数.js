/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  const res = new Array(num + 1).fill(0)
  for (let i = 1; i < num + 1; i++) {
    res[i] = res[i >> 1] + (i & 1)
  }
  return res
};

// var countBits = function(num) {
//   const res = new Array(num + 1).fill(0)
//   let begin = 1
//   let end = 2
//   for (let i = 1; i < num + 1; i++) {
//     if (i < end) {
//       res[i] = res[i - begin] + 1
//     } else {
//       res[i] = 1
//       begin = end
//       end = begin * 2
//     }
//   }
//   return res
// }
// @lc code=end

const input = 5
const output = countBits(input)
console.log(output)
