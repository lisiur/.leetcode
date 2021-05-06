struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn decode(encoded: Vec<i32>, first: i32) -> Vec<i32> {
        let mut origin = vec![first];
        for (i, _) in encoded.iter().enumerate() {
            origin.push(origin[i] ^ encoded[i])
        }
        return origin;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(vec![1, 0, 2, 1], Solution::decode(vec![1, 2, 3], 1))
    }
}
