/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  function inner(node) {
    if (!node) {
      return
    }
    const left = node.left
    const right = node.right
    node.right = left
    node.left = right
    inner(left)
    inner(right)
  }
  inner(root)
  return root
};
// @lc code=end

