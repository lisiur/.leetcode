/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
    if (tasks.length === 0) return 0;
    tasks.sort();
    let s = tasks.length;
    const set = [tasks[0]];
    const numRecord = [1];
    for (let i = 1; i < tasks.length; ++i) {
        while (tasks[i] === set[set.length - 1]) {
            numRecord[numRecord.length - 1]++;
            i++
        }
        if (i < tasks.length) {
            set.push(tasks[i]);
            numRecord.push(1);
        }
    }
    numRecord.sort((a, b) => b - a)
    let times = 0;
    while (s) {
        const curr = numRecord.slice(0, n + 1);
        s -= curr.length;
        if (s === 0) {
            times += curr.length;
        } else {
            times += (n + 1);
        }
        for (let i = 0; i < curr.length;) {
            numRecord[i]--;
            if (numRecord[i] === 0) {
                numRecord.splice(i, 1);
                curr.splice(i, 1);
            } else {
                i++;
            }
        }
        numRecord.sort((a, b) => b - a)
    }
    return times;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = leastInterval;
// @after-stub-for-debug-end