/*
 * @lc app=leetcode.cn id=226 lang=rust
 *
 * [226] 翻转二叉树
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

type TreeNodeType = Option<Rc<RefCell<TreeNode>>>;

impl Solution {
    pub fn invert_tree(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        let mut root = root;
        invert_tree(&mut root);
        root
        //  if let Some(node) = root.as_ref() {
        //     let (left, right) = (node.borrow().left.clone(), node.borrow().right.clone());
        //     node.borrow_mut().left = Solution::invert_tree(right);
        //     node.borrow_mut().right = Solution::invert_tree(left);
        // }
        // root
    }
}

fn invert_tree(root: &mut TreeNodeType) {
    if let Some(node) = root {
        std::mem::swap(&mut node.borrow_mut().left, &mut node.borrow_mut().right);
        invert_tree(&mut node.left);
        invert_tree(&mut node.right);
    }
}

// @lc code=end

