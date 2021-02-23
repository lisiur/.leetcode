/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    let sum = customers.reduce((prv, cur, idx) => grumpy[idx] ? prv : prv + cur, 0)
    let ret = 0
    for (let i = 0, prv; i < customers.length; i++) {
        prv = i - X
        if (grumpy[i]) sum += customers[i]
        if (prv >= 0 && grumpy[prv]) sum -= customers[prv]
        ret = Math.max(ret, sum)
    }
    return ret
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSatisfied;
// @after-stub-for-debug-end