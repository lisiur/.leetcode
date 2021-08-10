struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn minimum_time_required(jobs: Vec<i32>, k: i32) -> i32 {
        let mut sum = vec![0; jobs.len()];
        let mut ans = Box::new(i32::MAX);
        Self::dfs(0, k as usize, &jobs, &mut sum, 0, &mut ans);
        *ans
    }

    pub fn dfs(
        i: usize,
        k: usize,
        jobs: &Vec<i32>,
        sum: &mut Vec<i32>,
        max: i32,
        ans: &mut Box<i32>,
    ) {
        if max >= **ans {
            return;
        }
        if i == sum.len() {
            **ans = max;
            return;
        }
        for n in 0..k {
            sum[n] += jobs[i];
            Self::dfs(i + 1, k, jobs, sum, max.max(sum[n]), ans);
            sum[n] -= jobs[i];
        }
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(3, Solution::minimum_time_required(vec![3, 2, 3], 3));
    }
}
