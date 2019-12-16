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
  const res = new Array(num).fill(0)
  for (let i = 1; i < num + 1; i++) {
    res[i] = res[i & (i - 1)] + 1
  }
  return res
};
// @lc code=end

const input = 5
const output = countBits(input)
console.log(output)
