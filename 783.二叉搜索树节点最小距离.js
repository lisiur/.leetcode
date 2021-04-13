/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let a = 0, b = -Infinity
    let min = Infinity
    dfs(root, (node) => {
        a = b
        b = node.val
        min = Math.min(min, b - a)
    })
    return min
};

var dfs = function(node, handle) {
    if (!node) return
    dfs(node.left, handle)
    handle(node)
    dfs(node.right, handle)
}

var minDiffInBST = function(node) {
    let a = 0, b = -Infinity
    let min = Infinity
    const stack = []
    while (stack.length || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            a = b
            b = node.val
            min = Math.min(min, b - a)
            node = node.right
        }
    }
    return min
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minDiffInBST;
// @after-stub-for-debug-end