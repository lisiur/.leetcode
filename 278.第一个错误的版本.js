/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let s = 1
        let e = n
        let last = {
            i: 0,
            b: null,
        }
        let mid 
        while (s <= e) {
            mid = Math.floor((s + e) / 2)
            let b = isBadVersion(mid)
            if (b) {
                e = mid - 1
            } else {
                s = mid + 1
            }
            last.i = mid
            last.b = b
        }
        if (last.b) {
            return last.i
        } else {
            return last.i + 1
        }
    };
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solution;
// @after-stub-for-debug-end