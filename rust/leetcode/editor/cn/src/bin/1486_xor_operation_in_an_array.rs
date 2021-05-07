struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn xor_operation(n: i32, start: i32) -> i32 {
        let mut ans = start;
        for i in 1..n {
            ans = ans ^ (start + 2 * i)
        }
        ans
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(7, Solution::xor_operation(1, 7))
    }
}
