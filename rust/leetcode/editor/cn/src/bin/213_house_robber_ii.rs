struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn rob(nums: Vec<i32>) -> i32 {
        let n = nums.len();

        if n == 1 {
            return nums[0]
        }

        if n == 2 {
            return nums[0].max(nums[1])
        }

        let mut vec: Vec<i32> = vec![0; n];

        // 因为有个环的存在，所以我们要单独分析第一个房间偷和不偷的两种路线
        // 第一个路线：第一个房间偷，最后一个房间不偷
        // 第二个路线：第一个房间不偷

        // 第一种路线：
        vec[0] = nums[0];
        vec[1] = nums[0];
        for i in 2..n-1 {
            vec[i] = (vec[i-2] + nums[i]).max(vec[i-1])
        }
        let ans = vec[n-2];

        // 第二种路线：
        vec[0] = 0;
        vec[1] = nums[1];
        for i in 2..n {
            vec[i] = (vec[i-2] + nums[i]).max(vec[i-1])
        }

        ans.max(vec[n-1])
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        let v = Solution::rob(vec![1,2,3,1]);
        assert_eq!(4, v);
    }
    #[test]
    fn test2() {
        let v = Solution::rob(vec![1]);
        assert_eq!(1, v);
    }
    #[test]
    fn test3() {
        let v = Solution::rob(vec![4,1,2,7,5,3,1]);
        assert_eq!(14, v);
    }
}