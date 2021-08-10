struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
        let mut result = 0;
        let mut slice = &nums[..];
        while slice.len() >= 3 {
            let step = slice[1] - slice[0];
            let mut n = slice.len();
            for (idx, num) in slice[1..].iter().enumerate() {
                if num - slice[idx] != step {
                    // num 前一位有效，即 idx 所在位是当前最后一个有效位
                    // 所以个数是 idx + 1
                    n = idx + 1;
                    break;
                }
            }
            if n >= 3 {
                result += (n - 2) * (n - 1) / 2;
            }
            // slice 从当前最后一个有效位开始，重新计算
            slice = &slice[n - 1..];
        }
        result as i32
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(
            6,
            Solution::number_of_arithmetic_slices(vec![1, 2, 3, 4, 6, 1, 2, 3, 4])
        );
    }
}
