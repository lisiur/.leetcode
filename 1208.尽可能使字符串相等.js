/*
 * @lc app=leetcode.cn id=1208 lang=javascript
 *
 * [1208] 尽可能使字符串相等
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let l = 0
    let r = 0
    let cost = 0
    while (r < s.length) {
        cost += Math.abs(s[r].charCodeAt(0) - t[r].charCodeAt(0))
        r++
        if (cost > maxCost) {
            cost -= Math.abs(s[l].charCodeAt(0) - t[l].charCodeAt(0))
            l++
        }
    }
    return s.length - l
};
// @lc code=end
