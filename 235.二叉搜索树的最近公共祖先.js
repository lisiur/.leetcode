/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let map = new Map()
  let pViewed = false
  let qViewed = false
  function dfs(node) {
    if (!node) {
      return
    }

    if (node === p) {
      pViewed = true
    }
    if (node === q) {
      qViewed = true
    }

    if (pViewed && qViewed) {
      return
    }

    if (node.left) {
      map.set(node.left, node)
      dfs(node.left)
    }

    if (node.right) {
      map.set(node.right, node)
      dfs(node.right)
    }
  }

  dfs(root)
  let parents = new Set()
  let pParent = p
  let qParent = q
  while(pParent) {
    parents.add(pParent)
    pParent = map.get(pParent)
  }
  while(qParent) {
    if (parents.has(qParent)) {
      return qParent
    } else {
      qParent = map.get(qParent)
    }
  }
  return null
};
// @lc code=end

