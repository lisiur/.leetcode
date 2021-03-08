/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let len = s.length
    let cache = new Array(len).fill(0).map(() => new Array(len).fill(true))

    // 计算预处理数组
    // cache[i][j] 代表 s[i..j] 是否为回文串
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            cache[i][j] = cache[i+1][j-1] && s[i] === s[j]
        }
    }

    // f[i] 表示 s[0..i] 最小切割次数
    // f[i] = f[j] + 1 if s[j + 1, i] 为回文数
    const f = new Array(len).fill(Number.MAX_SAFE_INTEGER)
    for (let i = 0; i < len; i++) {
        if (cache[0][i]) {
            f[i] = 0
        } else {
            for (let j = 0; j < i; j++) {
                if (cache[j + 1][i]) {
                    f[i] = Math.min(f[i], f[j] + 1)
                }
            }
        }
    }
    return f[len-1]
};
// @lc code=end

