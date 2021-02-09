/*
 * @lc app=leetcode.cn id=992 lang=javascript
 *
 * [992] K 个不同整数的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    // OOM
    let n = 0
    const helper = new Array(A.length)
    for (let i = A.length - 1; i >= 0; i--) {
        for (j = i; j < A.length; j++) {
            if (i === j) {
                helper[j] = new Set([A[i]])
            } else {
                helper[j] = helper[j].add(A[i])
            }
            if (helper[j].size === K) {
                n++
            }
        }
    }
    return n
};
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    return S(A, K) - S(A, K-1)
};

var S = function(A, K) {
    let map = new Map()
    let set = new Set()
    let ret = 0
    let l = 0
    let r = 0
    while (r < A.length) {
        if (map.has(A[r])) {
            map.set(A[r], map.get(A[r]) + 1)
        } else {
            map.set(A[r], 1)
        }
        set.add(A[r])
        while (set.size > K) {
            map.set(A[l], map.get(A[l]) - 1)
            if (map.get(A[l]) === 0) {
                set.delete(A[l])
            }
            l++
        }
        r++
        ret += r - l + 1
    }
    return ret
}
// @lc code=end

