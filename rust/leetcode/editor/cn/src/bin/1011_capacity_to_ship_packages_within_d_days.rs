struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, d: i32) -> i32 {
        let mut left = weights.iter().max().unwrap().to_owned();
        let mut right: i32 = weights.iter().sum();
        while left < right {
            let mut cnt = 1;
            let mut cur = 0;
            let mid = left + (right - left) / 2;
            for weight in &weights {
                if cur + weight > mid {
                    cnt += 1;
                    cur = 0;
                }
                cur += weight;
            }
            if cnt <= d {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        left
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(15, Solution::ship_within_days(vec![1,2,3,4,5,6,7,8,9,10], 5));
    }
}