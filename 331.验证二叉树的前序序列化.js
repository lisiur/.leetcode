/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    if (preorder === '#') return true
    let inorder = 0
    let outorder = 0
    let nodes = preorder.split(',')
    for (let i = 0; i < nodes.length; i++) {
        if (i === 0 && nodes[i] === '#') return false
        if (i !== 0) inorder++
        if (nodes[i] !== '#') {
            outorder+=2
        }
        if (inorder >= outorder && i !== nodes.length - 1) return false
    }
    return inorder === outorder
}; 
 // @lc code=end

