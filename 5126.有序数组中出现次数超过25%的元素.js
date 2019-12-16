/*
 * @lc app=leetcode.cn id=5126 lang=javascript
 *
 * [5126] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const map = new Map()
  const len = parseInt(arr.length / 4) + 1
  for (let i = 0; i < arr.length; i++) {
    let cnt = (map.get(arr[i]) || 0) + 1
    if (cnt >= len) {
      return arr[i]
    }
    map.set(arr[i], cnt)
  }
  return -1
};
// @lc code=end

const input = [1]
const output = findSpecialInteger(input)
console.log(output)