/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    s = ' ' + s;
    p = ' ' + p;
    const dp = new Array(s.length + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(p.length + 1).fill(false);
    }
    dp[0][0] = true;
    for (let i = 0; i < s.length; ++i) {
        for (let j = 1; j < p.length; ++j) {
            if (s[i] === p[j] || p[j] === '.') {
                if (i === 0) {
                    dp[i][j] = false;
                } else {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else if (p[j] === '*') {
                if (p[j - 1] === '.' || p[j - 1] === s[i]) {
                    if (i === 0) {
                        dp[i][j] = dp[i][j - 1] || dp[i][j - 2];
                    } else {
                        dp[i][j] = dp[i][j - 1] || dp[i][j - 2] || dp[i - 1][j];
                    }
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            } else {
                dp[i][j] = false;
            }
        }
    }
    return dp[s.length - 1][p.length - 1];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isMatch;
// @after-stub-for-debug-end