/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  var i = 0, j = -1
  while (j++ < t.length) {
    if (i >= s.length) {
      return true
    }
    if (t[j] === s[i]) {
      ++i
    }
  }
  return false
};

var isSubsequence2 = function(t) {
  var map = new Map()
  for (let i = 0; i < t.length; ++i) {
    if (!map.get(t[i])) {
      map.set(t[i], [])
    }
    map.get(t[i]).push(i)
  }
  return function(s) {
    var i = -1
    for (let c of s) {
      if (!map.get(c)) {
        return false
      }
      i = map.get(c).find(it => it > i)
      if (i === void 0) {
        return false
      }
    }
    return true
  }
}
// @lc code=end

var s = "cabdabef"
var t = "ccabbdaaaabbbbdddddeeasdsawccasdf"

var input = [s, t]
var output = isSubsequence(...input)
console.log(output)

var fun = isSubsequence2(t)
var output = fun(s)
console.log(output)
