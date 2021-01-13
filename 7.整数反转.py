# pylint: disable=unused-wildcard-import
# pylint: disable=import-error

# @before-stub-for-debug-begin
from python3problem7 import *
from typing import *
# @before-stub-for-debug-end

#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#

# @lc code=start
import math
class Solution:
    MAX_INT = pow(2, 31) - 1
    MIN_INT = pow(2, 31)
    def reverse(self, x: int) -> int:
        sign = int(math.copysign(1, x))
        x = abs(x)
        value = 0
        while x != 0:
            v = x % 10
            x //= 10
            if sign > 0 and (value > self.MAX_INT // 10 or (value == self.MAX_INT // 10 and v > 7)):
                return 0
            if sign < 0 and (value > self.MIN_INT // 10 or (value == self.MIN_INT // 10 and v > 8)):
                return 0
            value = value * 10 + v

        return value * sign

# @lc code=end
