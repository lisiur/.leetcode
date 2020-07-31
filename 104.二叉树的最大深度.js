/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function getDepth(tree, curr = 0) {
  if (!tree) return curr
  return Math.max(getDepth(tree.left, curr + 1), getDepth(tree.right, curr + 1))
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  return getDepth(root)
};
// @lc code=end

/**
 * 非递归方法，即 dfs/bfs 打 tag 法
 */
