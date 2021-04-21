struct Solution;

//leetcode submit region begin(Prohibit modification and deletion)
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let n = needle.len();
        let m = haystack.len();
        let needle_bytes = needle.as_bytes();
        let haystack_bytes = haystack.as_bytes();
        if n == 0 {
            return 0;
        }
        if n > m {
            return -1;
        }
        let mut offset = [n; 26];
        for i in 0..n {
            let char_index = (needle_bytes[i] - 'a' as u8) as usize;
            offset[char_index] = n - i;
        }
        let mut start = 0;
        while start <= m - n {
            for i in start..start+n {
                if haystack_bytes[i] != needle_bytes[i - start] {
                    if start + n < m {
                        start += offset[(haystack_bytes[start + n] - 'a' as u8) as usize];
                        break;
                    } else {
                        return -1;
                    }
                }
                if i == start + n - 1 {
                    return start as i32;
                }
            }
        }
        return -1;
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {
        assert_eq!(2, Solution::str_str("hello".to_string(), "ll".to_string()));
        assert_eq!(0, Solution::str_str("".to_string(), "".to_string()));
        assert_eq!(-1, Solution::str_str("aaaaa".to_string(), "bba".to_string()));
        assert_eq!(2, Solution::str_str("abc".to_string(), "c".to_string()));
    }
}