/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * 暴力
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = [height[0]]
    let maxRight = [height[height.length - 1]]
    for (let i = 1; i < height.length; i++) {
        if (height[i] >= maxLeft[maxLeft.length - 1]) {
            maxLeft.push(height[i])
        } else {
            maxLeft.push(maxLeft[maxLeft.length - 1])
        }
    }
    for (let i = height.length - 1; i >= 0; i--) {
        if (height[i] >= maxRight[maxRight.length - 1]) {
            maxRight.push(height[i])
        } else {
            maxRight.push(maxRight[maxRight.length - 1])
        }
    }
    maxRight.reverse()
    let ans = 0
    for (let i = 0; i < height.length; i++) {
        ans += Math.min(maxRight[i], maxLeft[i]) - height[i]
    }
    return ans
};

/**
 * 栈
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = []
    let top = () => stack[stack.length - 1]
    let push = (v) => stack.push(v)
    let pop = () => stack.pop()
    let empty = () => stack.length === 0
    let ans = 0
    for (let i = 0; i < height.length; i++) {
        while (!empty() && height[i] > height[top()]) {
            let topVal = top()
            pop()
            if (empty()) break
            let distance = i - top() - 1
            let bound_height = Math.min(height[i], height[top()]) - height[topVal]
            ans += distance * bound_height
        }
        push(i)
    }
    return ans
};

/**
 * 双指针解法
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let right = height.length - 1
    let maxLeft = 0
    let maxRight = 0
    let ans = 0
    while (left < right) {
        maxLeft = Math.max(maxLeft, height[left])
        maxRight = Math.max(maxRight, height[right])
        if (maxLeft <= maxRight) {
            ans += maxLeft - height[left]
            left++
        } else {
            ans += maxRight - height[right]
            right--
        }
    }
    return ans
};


// @lc code=end


// @after-stub-for-debug-begin
module.exports = trap;
// @after-stub-for-debug-end