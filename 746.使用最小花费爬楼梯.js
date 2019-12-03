/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  function func(cost, step) {
    if (step >= cost.length - 1) {
      return Math.min(cost[cost.length - 1] + cost[cost.length - 3], cost[cost.length - 2])
    }
    cost[step] = Math.min(cost[step - 2], cost[step - 1]) + cost[step]
    return func(cost, step + 1)
  }
  return func(cost, 2)
}
// @lc code=end
