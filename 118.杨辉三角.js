/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const rst = []
  for (let i = 0; i < numRows; i++) {
    if (!rst[i]) {
      rst[i] = []
    }
    for (j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        rst[i].push(1)
      } else {
        rst[i].push(rst[i - 1][j-1] + rst[i - 1][j])
      }
    }
  }
  return rst
};
// @lc code=end

console.log(generate(5))
