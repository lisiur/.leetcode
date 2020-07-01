/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function (A, B) {
    let dp = new Array(A.length + 1);
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(B.length + 1).fill(0);
    }
    let max = 0;
    for (let i = A.length - 1; i >= 0; --i) {
        for (let j = B.length - 1; j >= 0; --j) {
            if (A[i] === B[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max;
};
// @lc code=end

