/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  const rst = []
  const map = new Map()
  if (!root) {
    return []
  }
  const queue = [root]
  map.set(root, 0)
  while(queue.length > 0) {
    const node = queue.shift()
    const index = map.get(node)
    if (!rst[index]) {
      rst[index] = []
    }
    rst[index].push(node.val)
    if (node.left) {
      queue.push(node.left)
      map.set(node.left, index + 1)
    }
    if (node.right) {
      queue.push(node.right)
      map.set(node.right, index + 1)
    }
  }
  return rst.reverse()
};
// @lc code=end

