/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    let m = matrix.length
    let n = matrix[0].length
    let turns = Math.ceil(Math.min(m, n) / 2)
    let ret = []
    for (let i = 0; i < turns; i++) {
        ret = ret.concat(turn(matrix, i, i, m-1, n-1))
        m -= 1
        n -= 1
    }
    return ret
};

function turn(matrix, m, n, rows, cols) {
    let ret = []
    for (let i = n; i <= cols; i++) {
        ret.push(matrix[m][i])
    }
    for (let i = m + 1; i <= rows; i++) {
        ret.push(matrix[i][cols])
    }
    if (rows - m > 0) {
        for (let i = cols - 1; i >= n; i--) {
            ret.push(matrix[rows][i])
        }
    }
    if (cols - n > 0) {
        for (let i = rows - 1; i > m; i--) {
            ret.push(matrix[i][n])
        }
    }
    return ret
}

var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []
    let m = matrix.length
    let n = matrix[0].length
    let ret = []
    let i = 0
    let j = 0
    let di = 0
    let dj = 1
    for (let _ = 0; _ < m * n; _++) {
        ret.push(matrix[i][j])
        matrix[i][j] = 101
        if (matrix[(i + di + m) % m][(j + dj + n) % n] === 101) {
            [di, dj] = [dj, -di]
        }
        i = (i + di + m) % m
        j = (j + dj + n) % n
    }
    return ret

}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end