#
# @lc app=leetcode.cn id=99 lang=python3
#
# [99] 恢复二叉搜索树
#

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# @lc code=start
# Definition for a binary tree node.
class Solution:
    def __init__(self):
        self.res = []

    def recoverTree(self, root: TreeNode) -> None:
        self.rec(root)
        errors = []
        for i in range(len(self.res) - 1):
            if self.res[i].val > self.res[i+1].val:
                errors.append(self.res[i])
                errors.append(self.res[i+1])
        errors[0].val, errors[-1].val = errors[-1].val, errors[0].val

    def rec(self, node: TreeNode):
        if node is not None:
            self.rec(node.left)
            self.res.append(node)
            self.rec(node.right)

# @lc code=end

