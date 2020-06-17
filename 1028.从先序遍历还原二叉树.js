/*
 * @lc app=leetcode.cn id=1028 lang=javascript
 *
 * [1028] 从先序遍历还原二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    if (!S.length) {
        return null
    }
    let levelRef = []
    for (let i =0 ; i < S.length;)  {
        let cnt = 0
        let val = ''
        while(i < S.length && S[i] === '-') {
            cnt++
            i++
        }
        while(i < S.length && S[i] !== '-') {
            val+= S[i++]
        }
        levelRef.push([cnt, val])
    }

    let handleIndex = 0
    function construct(level = 0) {
        if (handleIndex >= levelRef.length) {
            return null
        }
        if (levelRef[handleIndex][0] === level) {
            const node = new TreeNode(levelRef[handleIndex++][1])
            node.left = construct(level + 1)
            node.right = construct(level + 1)
            return node
        }
        return null
    }
    return construct()
};
// @lc code=end

console.log(recoverFromPreorder(""))
