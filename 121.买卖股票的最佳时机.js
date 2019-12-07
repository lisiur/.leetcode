/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var prevMin = Infinity
  var profit = 0
  for (let price of prices) {
    profit = Math.max(profit, price - prevMin)
    if (price < prevMin) {
      prevMin = price
    }
  }
  return profit
};
// @lc code=end

var input = [7,6,4,3,1]
var output = maxProfit(input)
console.log(output)