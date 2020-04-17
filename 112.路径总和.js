/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }
  let rst = false
  function dfs(node, s = 0) {
    if (!node) {
      return
    }
    s += node.val
    dfs(node.left, s)
    dfs(node.right, s)
    if (!node.left && !node.right) {
      if (s === sum) {
        rst = true
      }
    }
  }
  dfs(root)
  return rst
};
// @lc code=end

