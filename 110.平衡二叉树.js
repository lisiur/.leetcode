/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const map = new Map()
  let rst = true
  function dfs(tree) {
    if (!tree) {
      return
    }
    if (!tree.left && !tree.right) {
      map.set(tree, 1)
      return
    }
    dfs(tree.left)
    dfs(tree.right)
    const lh = map.get(tree.left) || 0
    const rh = map.get(tree.right) || 0
    if (Math.abs(lh - rh) > 1) {
      rst = false
      return
    }
    map.set(tree, Math.max(lh, rh) + 1)
  }
  dfs(root)
  return rst
};
// @lc code=end
