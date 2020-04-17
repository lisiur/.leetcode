/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  const map = new Map()
  function dfs(node) {
    if (!node) {
      return
    }
    if (!node.right && !node.left) {
      map.set(node, 1)
      return
    }
    dfs(node.left)
    dfs(node.right)
    let lH = map.get(node.left) || void 0
    let rH = map.get(node.right) || void 0
    const compare = [lH, rH].filter(it => it !== void 0)
    map.set(node, Math.min(...compare) + 1)
  }
  dfs(root)
  return map.get(root) || 0
};
// @lc code=end

