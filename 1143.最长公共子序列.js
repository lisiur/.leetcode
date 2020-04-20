/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let dp = new Array(text1.length + 1)
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(text2.length + 1).fill(0)
  }
  for (let i = 1; i <= text1.length; i++) {
    const char1 = text1[i - 1]
    for (let j = 1; j <= text2.length; j++) {
      const char2 = text2[j - 1]
      if (char1 === char2) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }
  return dp[text1.length][text2.length]
};
// @lc code=end

longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd")
