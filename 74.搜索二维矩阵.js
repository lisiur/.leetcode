/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    return binarySearch(matrix, target, 0, m * n - 1)
};

function binarySearch(context, target, low, high) {
    if (low > high) return false
    let [mid, val] = getMid(context, low, high)
    if (val === target) return true
    else if (val < target) return binarySearch(context, target, mid + 1, high)
    else return binarySearch(context, target, low, mid - 1)
}

function getMid(context, low, high) {
    let n = context[0].length
    let mid = Math.floor((low + high) / 2)
    let mm = Math.floor(mid / n)
    let nn = mid % n
    return [mid, context[mm][nn]]
}
// @lc code=end

