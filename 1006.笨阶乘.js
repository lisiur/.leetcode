/*
 * @lc app=leetcode.cn id=1006 lang=javascript
 *
 * [1006] 笨阶乘
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    if (N > 4){
        return [1, 2, 2, -1][N % 4] + N;
    }else{
        return [0, 1, 2, 6, 7][N];
    }
};
// @lc code=end
