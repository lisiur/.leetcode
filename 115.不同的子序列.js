/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // dp[i][j] => numDistinct(s[i..], t[j..])
    // dp[i][j] = dp[i+1][j]                if s[i] != t[j]
    //          = dp[i+1][j+1] + dp[i+1][j] if s[i] == t[j]
    let dp = []
    for (let i = 0; i < s.length + 1; i++) {
        dp.push([])
        for (let j = 0; j < t.length; j++) {
            dp[i].push(0)
        }
        dp[i].push(1)
    }

    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = t.length - 1; j>= 0; j--) {
            dp[i][j] = dp[i+1][j]
            if (s[i] === t[j]) {
                dp[i][j] += dp[i+1][j+1]
            }
        }
    } 
    return dp[0][0]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numDistinct;
// @after-stub-for-debug-end