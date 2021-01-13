# pylint: disable=unused-wildcard-import
# pylint: disable=import-error

# @before-stub-for-debug-begin
from python3problem1 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, v in enumerate(nums):
            j = map.get(target - v)
            if j != None :
                return [j, i]
            else:
                map[v] = i
        return [-1, -1]
# @lc code=end

