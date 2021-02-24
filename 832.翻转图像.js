/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (let i = 0, l, r; i < A.length; i++) {
        l = 0
        r = A[i].length - 1
        while (l <= r) {
            if (A[i][l] === A[i][r]) {
                A[i][l] = A[i][r] = A[i][r]^1
            }
            l++
            r--
        }
    }
    return A
};
// @lc code=end

