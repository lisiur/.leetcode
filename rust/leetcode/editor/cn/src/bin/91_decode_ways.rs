struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let n = s.len();
        let chars = s.as_bytes();
        let mut dp = vec![0; n + 1];
        dp[0] = 1;
        if chars[0] as char == '0' {
            return 0;
        }
        dp[1] = 1;
        for i in 2..=n {
            let char = chars[i - 1] as char;
            // 第一种情况： 只用一个字符解码
            if char != '0' {
                dp[i] += dp[i-1];
            }
            // 第二种情况：用前一个字符和当前字符一起解码
            let pre_char = chars[i - 2] as char;
            if pre_char == '1' || pre_char == '2' && char as u8 - '0' as u8 <= 6 {
                dp[i] += dp[i-2];
            }
        }
        return dp[n];
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        let input = "06".to_string();
        let output = Solution::num_decodings(input);
        assert_eq!(0, output);
    }
}