/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return ""
    }
    let str = "";
    function dfs(node) {
        if (node) {
            str = str + node.val + ',';
            dfs(node.left, str);
            dfs(node.right, str);
        } else {
            str = str + 'null,';
        }
    }
    dfs(root);
    return str.slice(0, str.length - 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (!data) {
        return null
    }
    const arr = data.split(',').reverse();
    function dfs() {
        const val = arr.pop();
        if (val === 'null') return null;
        const node = new TreeNode(val);
        node.left = dfs()
        node.right = dfs()
        return node
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
deserialize(serialize(null));

// @after-stub-for-debug-begin
module.exports = serialize;
// @after-stub-for-debug-end