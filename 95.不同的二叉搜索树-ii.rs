/*
 * @lc app=leetcode.cn id=95 lang=rust
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
// Definition for a binary tree node.
// #[derive(Debug, PartialEq, Eq)]
// pub struct TreeNode {
//   pub val: i32,
//   pub left: Option<Rc<RefCell<TreeNode>>>,
//   pub right: Option<Rc<RefCell<TreeNode>>>,
// }
//
// impl TreeNode {
//   #[inline]
//   pub fn new(val: i32) -> Self {
//     TreeNode {
//       val,
//       left: None,
//       right: None
//     }
//   }
// }
use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn generate_trees(n: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
        if n == 0 {
            vec![]
        } else {
            generate(1, n)
        }
    }
}

fn generate(start: i32, end: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
    if start > end {
        return vec![None]
    }
    let mut rst = Vec::new();
    for i in start..=end {
        let left = generate(start, i-1);
        let right = generate(i+1, end);
        for j in 0..left.len() {
            for k in 0..right.len() {
                let node = TreeNode {
                    val: i,
                    left: left[j as usize].as_ref().map(|v| Rc::clone(&v)),
                    right: right[k as usize].as_ref().map(|v| Rc::clone(&v)),
                };
                rst.push(Some(Rc::new(RefCell::new(node))))
            }
        }
    }
    rst
}
// @lc code=end

