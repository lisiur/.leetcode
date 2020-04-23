/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const arr = [...new Array(n + 1)].map((_, i) => String(i))
  for (let i = 3, j = 5, k = 15; i <= n || j <= n || k <= n; i += 3, j += 5, k += 15) {
    if (arr[i] === String(i)) {
      arr[i] = 'Fizz'
    }
    if (j <= n && arr[j] === String(j)) {
      arr[j] = 'Buzz'
    }
    if (k <= n) {
      arr[k] = 'FizzBuzz'
    }
  }
  return arr.slice(1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = fizzBuzz;
// @after-stub-for-debug-end