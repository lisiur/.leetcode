/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (33.31%)
 * Likes:    330
 * Dislikes: 0
 * Total Accepted:    52.8K
 * Total Submissions: 158.3K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrime = new Array(n).fill(true)
  for (let i = 2; i <= n; i++) {
    for (let j = i * 2; j <=n; j+=i) {
      isPrime[j] = false
    }
  }
  return isPrime.slice(2).filter(Boolean).length
};
// @lc code=end

