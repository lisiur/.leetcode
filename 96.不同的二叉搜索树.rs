/*
 * @lc app=leetcode.cn id=96 lang=rust
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
///
/// dp[n] = dp[0]*dp[n-1] + dp[1]*dp[n-2] + ... + dp[n-1] * dp[0]
/// dp[0] = 1
/// dp[1] = 1
/// dp[2] = dp[0]*dp[1] + dp[1] * dp[0]
/// dp[3] = dp[0]*dp[2] + dp[1] * dp[1] + dp[2] * dp[0]
/// 
impl Solution {
    pub fn num_trees(n: i32) -> i32 {
        let mut dp = vec![1, 1];
        for i in 2..=n as usize {
            dp.push(0);
            for j in 0..i {
                dp[i] += dp[j]*dp[i-j-1]
            }
        }
        dp[n as usize]
    }
}
// @lc code=end

