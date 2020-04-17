/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const rst = []
  for (let i = 0; i < rowIndex + 1; i++) {
    rst.push(1)
    for (let j = i - 1; j > 0; j--) {
      rst[j] += rst[j - 1]
    }
  }
  return rst
};
// @lc code=end

console.log(getRow(5))
