/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let m = matrix.length
    this.sumMatrix = []
    if (m === 0) return
    let n = matrix[0].length
    for (let i = 0; i < m; i++) {
        this.sumMatrix.push([...matrix[i]])
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0) {
                this.sumMatrix[i][j] += this.sumMatrix[i-1][j]
            }
            if (j - 1 >= 0) {
                this.sumMatrix[i][j] += this.sumMatrix[i][j-1]
            }
            if (i - 1 >= 0 && j - 1 >= 0) {
                this.sumMatrix[i][j] -= this.sumMatrix[i-1][j-1]
            }
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let ret = this.sumMatrix[row2][col2]
    if (row1 - 1 >= 0) {
        ret -= this.sumMatrix[row1-1][col2]
    }
    if (col1 - 1 >= 0) {
        ret -= this.sumMatrix[row2][col1-1]
    }
    if (row1 - 1 >= 0 && col1 - 1 >= 0) {
        ret += this.sumMatrix[row1-1][col1-1]
    }
    return ret
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

