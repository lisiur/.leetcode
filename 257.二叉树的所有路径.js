/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const rst = []
  function dfs(node, arr = []) {
    if (!node) {
      return
    }
    arr = [...arr, node.val]
    if (!node.left && !node.right) {
      rst.push(arr)
      return
    } 
    if (node.left) {
      dfs(node.left, arr)
    }
    if (node.right) {
      dfs(node.right, arr)
    }
  }
  dfs(root)
  return rst.map(it => it.join('->'))
};
// @lc code=end

