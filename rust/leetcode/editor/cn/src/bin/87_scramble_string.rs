struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn is_scramble(s1: String, s2: String) -> bool {
        let n = s1.len();
        let chars1 = s1.chars().collect::<Vec<char>>();
        let chars2 = s2.chars().collect::<Vec<char>>();

        let mut dp = vec![vec![vec![false; n + 1];n];n];

        for i in 0..n {
            for j in 0..n {
                dp[i][j][1] = chars1[i].eq(&chars2[j]);
            }
        }

        for len in 2..=n {
            for i in 0..=n-len {
                for j in 0..=n-len {
                    for k in 1..=len-1 {
                        if dp[i][j][k] && dp[i+k][j+k][len-k] {
                            dp[i][j][len] = true;
                            break;
                        }
                        if dp[i][j+len-k][k] && dp[i+k][j][len-k] {
                            dp[i][j][len] = true;
                            break;
                        }
                    }
                }
            }
        }
        return dp[0][0][n];
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        let ans = Solution::is_scramble("great".to_string(), "rgeat".to_string());
        assert_eq!(true, ans);
    }
}