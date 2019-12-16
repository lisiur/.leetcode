/*
 * @lc app=leetcode.cn id=5127 lang=javascript
 *
 * [5127] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1
    } else if (a[0] === b[0]) {
      if (a[1] >= b[1]) {
        return -1
      } else {
        return 1
      }
    } else {
      return 1
    }
  })
  let cnt = intervals.length
  let last = intervals[0]
  for (i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= last[0] && intervals[i][1] <= last[1]) {
      cnt -= 1
    } else {
      last = intervals[i]
    }
  }
  return cnt
};
// @lc code=en

const input = [[1,4],[3,6],[2,8]]
const output = removeCoveredIntervals(input)
console.log(output)