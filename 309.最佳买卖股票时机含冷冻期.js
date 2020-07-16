/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (prices.length < 1) return 0
    const dp = [...new Array(prices.length + 1)].map(() => [0, 0, 0]);
    // dp[i][0] -> 当天结束持有状态　　　  = max(dp[i-1][0], dp[i-1][2]-p[i])
    // dp[i][1] -> 当天结束未持有冷冻期　  = dp[i-1][0]+p[i]
    // dp[i][2] -> 当天结束未持有非冷冻期  = max(dp[i-1][1], dp[i-1][2])
    dp[0] = [-Infinity, -prices[0], 0]
    for (let i = 1; i <= prices.length; ++i) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i - 1]);
        dp[i][1] = dp[i - 1][0] + prices[i - 1];
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    }
    return Math.max(dp[prices.length][1], dp[prices.length][2]);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxProfit;
// @after-stub-for-debug-end