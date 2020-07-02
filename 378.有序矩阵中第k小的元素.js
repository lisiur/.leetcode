/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    n = matrix.length;
    left = matrix[0][0];
    right = matrix[n - 1][n - 1];
    while (left < right) {
        mid = left + ((right - left) >> 1);
        if (check(matrix, mid, k, n)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

function check(matrix, mid, k, n) {
    i = n - 1;
    j = 0;
    num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            num += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return num >= k;
}

// @lc code=end

