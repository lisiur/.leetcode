/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0
  const map = new Map()
  function dfs(node) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      if (map.has(node)) {
        sum += node.val
      }
    }
    if (node.left) {
      map.set(node.left, node)
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return sum
};
// @lc code=end

