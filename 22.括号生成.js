/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
function helper(n, m, cur = '', rst = []) {
  if (n > m) {
    return
  }
  if (n < 0) {
    return
  }
  if (m === 0) rst.push(cur)
  helper(n - 1, m, cur + '(', rst)
  helper(n, m - 1, cur + ')', rst)
}
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) {
    return [""]
  } else {
    let rst = []
    helper(n - 1, n, '(', rst)
    return rst
  }
};
// @lc code=end

