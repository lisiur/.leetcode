/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = []
    const list = new Array(T.length).fill(0)
    for (let i = 0, k; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length-1]]) {
            k = stack.pop()
            list[k] = i - k
        }
        stack.push(i)
    }
    return list
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = dailyTemperatures;
// @after-stub-for-debug-end