# pylint: disable=unused-wildcard-import
# pylint: disable=import-error

# @before-stub-for-debug-begin
from python3problem98 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=98 lang=python3
#
# [98] 验证二叉搜索树
#
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
# class Solution:
#     def isValidBST(self, root: TreeNode) -> bool:
#         return self._isValidBST(root, [float('-inf'), float('inf')])

#     def _isValidBST(self, node: TreeNode, rng: List) -> bool:
#         if node == None: return True
#         if node.val > rng[0] and node.val < rng[1]:
#             return self._isValidBST(node.left, [rng[0], node.val]) and self._isValidBST(node.right, [node.val, rng[1]])
#         else:
#             return False

class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        return self._isValidBST(root, float('-inf'))

    def _isValidBST(self, node: TreeNode, pre: int) -> bool:
        if node == None: return True
        if not self._isValidBST(node.left, pre): return False
        if node.val <= pre: return False
        if not self._isValidBST(node.right, node.val): return False
        return True
# @lc code=end
