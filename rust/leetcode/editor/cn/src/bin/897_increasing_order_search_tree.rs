struct Solution;

Definition for a binary tree node.
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
            right: None
        }
    }
}

//leetcode submit region begin(Prohibit modification and deletion)
use std::rc::Rc;
use std::cell::{RefCell, Ref};

type Node = Rc<RefCell<TreeNode>>;
impl Solution {
    pub fn increasing_bst(root: Option<Rc<RefCell<TreeNode>>>) -> Option<Rc<RefCell<TreeNode>>> {
        if let Some(root) = root {
            let mut vec = vec![];
            Solution::dfs(Some(root), &mut vec);
            for i in 0..vec.len() - 1 {
                let mut mut_node = vec[i].borrow_mut();
                mut_node.left = None;
                mut_node.right = Some(vec[i+1].clone());
            }
            let mut last = vec[vec.len()-1].borrow_mut();
            last.left = None;
            last.right = None;
            Some(vec[0].clone())
        } else {
            None
        }
    }

    fn dfs(root: Option<Node>, mut vec: &mut Vec<Node>) -> &Vec<Node> {
        if let Some(root) = root {
            Solution::dfs(root.borrow().left.clone(), &mut vec);
            vec.push(root.clone());
            Solution::dfs(root.borrow().right.clone(), &mut vec);
        }
        vec
    }
}
//leetcode submit region end(Prohibit modification and deletion)


fn main() {}

#[cfg(test)]
mod tests {
    use super::{Solution, TreeNode};
    use std::rc::Rc;
    use std::cell::RefCell;

    #[test]
    fn test() {
        let mut a = TreeNode::new(2);
        let mut b = TreeNode::new(1);
        let mut c = TreeNode::new(5);
        let mut d = TreeNode::new(3);
        c.left = Some(Rc::new(RefCell::new(d)));
        a.left = Some(Rc::new(RefCell::new(b)));
        a.right = Some(Rc::new(RefCell::new(c)));
        dbg!(&a);
        let r = Solution::increasing_bst(Some(Rc::new(RefCell::new(a))));
        dbg!(r);
    }
}