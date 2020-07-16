/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let left, right, max
    left = right = max = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            ++left
        } else {
            ++right
        }
        if (right === left) {
            max = Math.max(max, left * 2)
        } else if (right > left) {
            left = right = 0
        }
    }
    left = right = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '(') {
            ++left
        } else {
            ++right
        }
        if (right === left) {
            max = Math.max(max, left * 2)
        } else if (left > right) {
            left = right = 0
        }
    }
    return max
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = longestValidParentheses;
// @after-stub-for-debug-end