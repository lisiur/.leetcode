/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 *
 * https://leetcode-cn.com/problems/reverse-bits/description/
 *
 * algorithms
 * Easy (57.38%)
 * Likes:    157
 * Dislikes: 0
 * Total Accepted:    37.4K
 * Total Submissions: 65.2K
 * Testcase Example:  '00000010100101000001111010011100'
 *
 * 颠倒给定的 32 位无符号整数的二进制位。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入: 00000010100101000001111010011100
 * 输出: 00111001011110000010100101000000
 * 解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
 * ⁠     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
 * 
 * 示例 2：
 * 
 * 输入：11111111111111111111111111111101
 * 输出：10111111111111111111111111111111
 * 解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
 * 因此返回 3221225471 其二进制表示形式为 10101111110010110010011101101001。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 请注意，在某些语言（如
 * Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
 * 在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在上面的 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数
 * -1073741825。
 * 
 * 
 * 
 * 
 * 进阶:
 * 如果多次调用这个函数，你将如何优化你的算法？
 * 
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let [res, m] = [0, 31]
    // js 中使用 << 会将数据截断为有符号32位，所以要使用 >>> 0 强制转换为无符号 32 位
    while (n) {
        res |= (n & 1) << m
        n >>>= 1
        m--
    }
    return res >>> 0
};

var reverseBits = function(n) {
    const M1 = 0x55555555;
    const M2 = 0x33333333;
    const M4 = 0x0f0f0f0f;
    const M8 = 0x00ff00ff;

    n = n >>> 1 & M1 | (n & M1) << 1;
    n = n >>> 2 & M2 | (n & M2) << 2;
    n = n >>> 4 & M4 | (n & M4) << 4;
    n = n >>> 8 & M8 | (n & M8) << 8;

    return (n >>> 16 | n << 16) >>> 0;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseBits;
// @after-stub-for-debug-end