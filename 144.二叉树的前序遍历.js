/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const arr = []
    function dfs(node) {
        if (node) {
            arr.push(node.val)
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)
    return arr
};

var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    const [INIT, VIEWED] = [0, 1]
    const arr = []
    const stack = [[INIT, root]]
    while (stack.length) {
        const [status, node] = stack.pop()
        if (!node) continue
        if (status === INIT) {
            stack.push([INIT, node.right])
            stack.push([INIT, node.left])
            stack.push([VIEWED, node])
        } else {
            arr.push(node.val)
        }
    }
    return arr
};
// @lc code=end

