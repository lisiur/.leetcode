/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0, r = s.length - 1
    while (l < r) {
        while(l < r && !isAlphabet(s[l])) l++
        while(l < r && !isAlphabet(s[r])) r--
        if (!isEqual(s[l], s[r])) return false
        else (++l, --r)
    }
    return true
};

/**
 * @param {string} c
 */
function isAlphabet(c) {
    const charCode = c.charCodeAt(0)
    return charCode >=48 && charCode <=57
        || charCode >=65 && charCode <= 90
        || charCode >=97 && charCode <= 122
}

/**
 * @param {string} a
 * @param {string} b
 */
function isEqual(a, b) {
    return a.toLowerCase() === b.toLowerCase()
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end