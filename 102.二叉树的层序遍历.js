/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    return resolve2(root)
};

function resolve(node, level = 0, result = []) {
    if (!node) return result
    result[level] ??= []
    result[level].push(node.val)
    resolve(node.left, level + 1, result)
    resolve(node.right, level + 1, result)
    return result
}

function resolve2(node) {
    if (!node) return []
    let queue = [node]
    let result = []
    while (queue.length) {
        const lvlen = queue.length
        result.push([])
        for (let i = 0; i < lvlen; i++) {
            node = queue.shift()
            result[result.length - 1].push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }

    return result
}
// @lc code=end


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}