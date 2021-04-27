struct Solution;

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

//leetcode submit region begin(Prohibit modification and deletion)
use std::cell::RefCell;
use std::rc::Rc;
impl Solution {
    pub fn range_sum_bst(root: Option<Rc<RefCell<TreeNode>>>, low: i32, high: i32) -> i32 {
        let mut stack = vec![];
        let mut root = root;
        let mut sum = 0;
        let mut done = false;
        while !stack.is_empty() || root.is_some() {
            while root.is_some() {
                stack.push(root.as_ref().unwrap().clone());
                root = root.as_ref().and_then(|node| node.borrow().left.clone());
            }
            root = stack.pop().and_then(|node| {
                let val = node.borrow().val;
                if val >= low && val <= high {
                    sum += val;
                } else if val > high {
                    done = true;
                }
                node.borrow().right.clone()
            });
            if done {
                return sum;
            }
        }
        return sum;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

fn main() {}

#[cfg(test)]
mod tests {
    use super::Solution;
    #[test]
    fn test() {}
}
