/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    function getCell(i, j) {
        return matrix[i][j]
    }

    function getLeftTop(i, j) {
        return matrix[i-1][j-1]
    }

    function hasLeftTop(i, j) {
        return i - 1 >= 0 && j - 1 >= 0
    }

    function isToeplitzLine(i, j) {
        let val = getCell(i, j)
        while (hasLeftTop(i, j)) {
            if (getLeftTop(i, j) !== val) {
                return false
            }
            i--
            j--
        }
        return true
    }

    const rows = matrix.length
    const cols = matrix[0].length
    const lines = []
    for (let i = 0; i < cols; i++) {
        lines.push([rows - 1, i])
    }
    for (let j = rows - 2; j >= 0; j--) {
        lines.push([j, cols - 1])
    }
    for (let i = 0; i < lines.length; i++) {
        if (!isToeplitzLine(lines[i][0], lines[i][1])) {
            return false
        }
    }
    return true
};

var isToeplitzMatrix = function(matrix) {
    const rows = matrix.length
    const cols = matrix[0].length
    function getCell(i, j) {
        return matrix[i][j]
    }
    function getBottomRight(i, j) {
        return matrix[i+1][j+1]
    }
    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < cols - 1; j++ ) {
            if (getCell(i, j) !== getBottomRight(i, j)) return false
        }
    }
    return true
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isToeplitzMatrix;
// @after-stub-for-debug-end