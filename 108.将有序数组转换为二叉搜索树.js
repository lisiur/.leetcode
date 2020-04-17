/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function helper(nums, left, right) {
  if (left > right) {
    return null
  }
  const middle = Math.floor((left + right) / 2)
  const root = new TreeNode(nums[middle])
  root.left = helper(nums, left, middle - 1)
  root.right = helper(nums, middle + 1, right)
  return root
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1)
};
// @lc code=end

