/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length === 0) {
    return 0
  }
  const dp = new Array(envelopes.length).fill(1)
  envelopes.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < envelopes.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (envelopes[j][1] < envelopes[i][1] && envelopes[j][0] < envelopes[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
};
// @lc code=end

