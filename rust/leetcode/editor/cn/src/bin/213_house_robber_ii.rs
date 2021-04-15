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

        // vec[n] = (a, b) 的含义是
        // 不偷第 n 个房间所能达到的最大值为 a
        //   偷第 n 个房间所能达到的最大值为 b
        let mut vec: Vec<(i32, i32)> = vec![(0, 0); n];

        // 因为有个环的存在，所以我们要单独分析第一个房间偷和不偷的两种路线
        // 第一个路线：第一个房间偷，最后一个房间不偷
        // 第二个路线：第一个房间不偷

        // 第一种路线：
        vec[1] = (nums[0], nums[0]);
        for i in 2..n-1 {
            let prev = &vec[i-1];
            vec[i] = (
                prev.0.max(prev.1), // 当前房间不偷的最大值为上一个房间偷或不偷的较大值
                prev.0 + nums[i],         // 当前房间偷的最大值为上一个房间不偷加上当前房间的价值
            );
        }
        let ans = vec[n-2].0.max(vec[n-2].1); // 直接取倒数第二个房间即可

        // 第二种路线：
        vec[1] = (0, nums[1]);
        for i in 2..n {
            let prev = &vec[i-1];
            vec[i] = (
                prev.0.max(prev.1), // 当前房间不偷的最大值为上一个房间偷或不偷的较大值
                prev.0 + nums[i],         // 当前房间偷的最大值为上一个房间不偷加上当前房间的价值
            );
        }

        // 取最后一个房间和第一种情况的max比较即可
        vec[n-1].0.max(vec[n-1].1).max(ans)
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
}