/*
 * @lc app=leetcode.cn id=1014 lang=javascript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let score = 0, maxi = A[0] + 0
    for (let j = 1; j < A.length; ++j) {
        score = Math.max(score, A[j] - j + maxi)
        maxi = Math.max(maxi, A[j] + j)
    }
    return score
};
// @lc code=end

