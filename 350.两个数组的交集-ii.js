/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = new Map()
    nums1.forEach(num => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    const rst = []
    nums2.forEach(num => {
        let n = map.get(num) || 0
        if (n > 0) {
            map.set(num, n - 1)
            rst.push(num)
        }
    })
    return rst
};
// @lc code=end

