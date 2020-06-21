/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
var maxPathSum = function(root) {
    let ret = -Infinity
    function rec(node) {
        if (!node) return 0
        const leftV = Math.max(rec(node.left), 0)
        const rightV = Math.max(rec(node.right), 0)
        const cond1 = node.val + leftV + rightV
        const cond2 = node.val + Math.max(leftV, rightV)
        const parentV = Math.max(0, cond2)
        ret = Math.max(cond1, cond2, ret)
        return parentV
    }
    rec(root)
    return ret
};
// @lc code=end

