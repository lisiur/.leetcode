/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function(root) {
  if (!root) {
    return true
  }
  const map = new Map()
  map.set(root, 0)
  const queue = [root]
  let sameHeightNodes = new Map()
  let indexRange = [1, 2]
  function compare() {
      let i = indexRange[0]
      let j = indexRange[1]
      while (j > i) {
        let leftNode = sameHeightNodes.get(i++)
        let rightNode = sameHeightNodes.get(j--)
        if (leftNode && rightNode) {
          if (leftNode.val !== rightNode.val) {
            return false
          }
        } else {
          if (leftNode !== rightNode) {
            return false
          }
        }
      }
      return true
  }
  while (queue.length > 0) {
    const node = queue.shift()
    const nodeIndex = map.get(node)
    const leftIndex = nodeIndex * 2 + 1
    const rightIndex = nodeIndex * 2 + 2
    // 当前高度node已收集完

    if (leftIndex > indexRange[1]) {
      if (!compare()) {
        return false
      }
      indexRange = [indexRange[0] * 2 + 1, indexRange[1] * 2 + 2]
    }

    if (node.left) {
      queue.push(node.left)
      map.set(node.left, leftIndex)
      sameHeightNodes.set(leftIndex, node.left)
    }
    if (node.right) {
      queue.push(node.right)
      map.set(node.right, rightIndex)
      sameHeightNodes.set(rightIndex, node.right)
    }
  }
  return compare()
};
// @lc code=end

