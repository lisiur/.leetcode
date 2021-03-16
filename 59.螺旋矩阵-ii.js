/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let arr = new Array(n).fill(0).map(it => new Array(n).fill(0))
    let dx = 0
    let dy = 1
    let x = 0
    let y = 0
    let i = 1
    let tx, ty
    while (i <= n**2) {
        arr[x][y] = i
        tx = (x + dx + n) % n
        ty = (y + dy + n) % n
        if (arr[tx][ty] !== 0) {
            [dx, dy] = [dy, -dx]
        }
        x = (x + dx + n) % n
        y = (y + dy + n) % n
        i++
    }
    return arr
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateMatrix;
// @after-stub-for-debug-end