struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut p = 0;
        for i in 0..nums.len() {
            if nums[i] != val {
                nums[p] = nums[i];
                p += 1;
            }
        }
        p as i32
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(4, Solution::remove_element(&mut vec![1,2,2,3,3,4], 2));
        assert_eq!(4, Solution::remove_element(&mut vec![1,2,2,3,3,4], 3));
        assert_eq!(4, Solution::remove_element(&mut vec![1,2,2,3,3,3,4], 3));
    }
}