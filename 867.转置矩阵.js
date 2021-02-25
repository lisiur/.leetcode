/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let tMatrix = new Array(n)
    for (let i = 0; i < n; i++) {
        tMatrix[i] = new Array(m)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            tMatrix[j][i] = matrix[i][j]
        }
    }
    return tMatrix
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = transpose;
// @after-stub-for-debug-end