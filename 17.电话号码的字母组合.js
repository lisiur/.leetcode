/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function helper(arr, pre = '', rst = []) {
  if (arr.length === 0) {
    return
  } else if (arr.length === 1) {
    arr[0].forEach(c => {
      rst.push(pre + c)
    })
  } else {
    arr[0].forEach(c => {
      helper(arr.slice(1), pre + c, rst)
    })
  }
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let rst = []
  let arr = Array.from(digits).map(n => map[n])
  helper(arr, '', rst)
  return rst
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = letterCombinations;
// @after-stub-for-debug-end