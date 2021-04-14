struct Solution;
//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn divide(mut dividend: i32, mut divisor: i32) -> i32 {
        // 处理溢出
        if divisor == -1 && dividend == i32::MIN {
            return i32::MAX;
        }
        // 处理 被除数为 0 的情况
        if dividend == 0 {
            return 0;
        }
        // 剩下都是不为 0 情况
        // 获取最终结果的符号位
        let sign = if dividend.signum() * divisor.signum() == 1 { 1 } else { -1 };

        // 全部转为负数（如果转为正数，当值为 i32::MIN 时会溢出）
        if dividend.is_positive() {
            dividend = -dividend;
        }
        if divisor.is_positive() {
            divisor = -divisor;
        }
        // 被除数的绝对值小
        if dividend > divisor {
            return 0;
        }
        let ans = Self::div(dividend, divisor);
        return if sign == 1 {
            ans
        } else {
            -ans
        };
    }

    fn div(dividend: i32, divisor: i32) -> i32 {
        if dividend > divisor {
            return 0
        }
        let mut count = 1;
        let mut temp_divisor = divisor;
        while temp_divisor >= -1073741824 && temp_divisor + temp_divisor >= dividend {
            temp_divisor += temp_divisor;
            count += count;

        }
        count + Self::div(dividend - temp_divisor, divisor)
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        let dividend = i32::MIN;
        let divisor = -1;
        assert_eq!(i32::MAX, Solution::divide(dividend, divisor));
    }
}