/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s
    const dp = Array(s.length);
    let min = 0;
    let max = 0;
    for (let i = 0; i < dp.length; i++) {
        dp[i] = Array(s.length).fill(false);
    }
    for (let j = 1; j < s.length; j++) {
        for (let i = 0; i < j; i++) {
            if (s[j] === s[i]) {
                if (j - i <= 2) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
                if (dp[i][j] && j - i > max - min) {
                    min = i
                    max = j
                }
            } else {
                dp[i][j] = false
            }
        }
    }
    return s.slice(min, max + 1);
};
var longestPalindrome = function (s) {
    var i = 0, j = 0;
    var palindrome = '';
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < 2; j++) {
            if (s[i + j] === s[i]) {
                var tmp = calcMax(s, i, i+j)
                if (tmp.length > palindrome.length) {
                    palindrome = tmp;
                }
            }
        }
    }
    return palindrome;
};

/**
 * 
 * @param {string} s 
 * @param {number} p 
 * @param {number} n 
 * @returns {string}
 */
function calcMax(s, p, n) {
    var length = n - p + 1;
    p--; n++;
    while (p >= 0 && n < s.length && s[p] === s[n]) {
        length += 2;
        p--;
        n++;
    }
    return s.substr(p+1, length);
}
// @lc code=end

const a = longestPalindrome(
    "bababaab"
);
console.log(a)
