/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return []
    function rec(start, end) {
        if (start > end) {
            return [null];
        }
        const rst = [];
        for (let i = start; i <= end; ++i) {
            const leftRst = rec(start, i - 1);
            const rightRst = rec(i + 1, end);
            for (let l = 0; l < leftRst.length; ++l) {
                for (let r = 0; r < rightRst.length; ++r) {
                    const node = new TreeNode(i, leftRst[l], rightRst[r]);
                    rst.push(node);
                }
            }
        }
        return rst;
    }
    return rec(1, n);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = generateTrees;
// @after-stub-for-debug-end