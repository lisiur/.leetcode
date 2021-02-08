/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let globalMax = 1
    let curMax = 1
    let prevSignal = 0
    let curSignal = 0
    for (let i = 1; i < arr.length; i++ ) {
        let [prev, curr] = [arr[i-1], arr[i]]
        let diff = prev - curr
        curSignal = diff > 0 ? 1 : diff < 0 ? -1 : 0
        if (curSignal === 0) {
            prevSignal = 0
            curMax = 1
        } else {
            if (curSignal != prevSignal) {
                curMax += 1
                globalMax = Math.max(globalMax, curMax)
            } else {
                curMax = 2
            }
        }
        prevSignal = curSignal
    }
    return globalMax
};
// @lc code=end

console.log(maxTurbulenceSize([2,0,2,4,2,5,0,1,2,3]))
// @after-stub-for-debug-begin
module.exports = maxTurbulenceSize;
// @after-stub-for-debug-end