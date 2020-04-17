/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  return prices.reduce((prev, curr, index) => {
    if (index === prices.length - 1) {
      return prev
    }
    return prev + Math.max(0, prices[index + 1] - prices[index])
  }, 0)
};
// @lc code=end

