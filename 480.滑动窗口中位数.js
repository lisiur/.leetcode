/*
 * @lc app=leetcode.cn id=480 lang=javascript
 *
 * [480] 滑动窗口中位数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    // 记录结果
    let ret = []
    // 窗口数组
    let arr = nums.slice(0, k)
    // 首次进行快排
    quickSort(arr)
    // 放入第一个中位数
    ret.push(calcMid(arr))
    // 遍历原数组
    for (let i = 1; i <= nums.length - k; i++) {
        binarySearchSort(arr, nums[i-1], nums[i-1+k])
        ret.push(calcMid(arr))
    }
    return ret
};

function calcMid(arr) {
    let sum = arr.length - 1
    if (sum % 2 === 0) {
        return arr[sum/2]
    } else {
        let mid = Math.floor(sum/2)
        return (arr[mid] + arr[mid + 1]) / 2
    }
}

function quickSort(arr) {
    arr.sort((a, b) => a - b)
}

function binarySearchSort(arr, remove, add) {
    // 使用 add 替换 remove 并返回 remove 所在位置
    let index = binarySearchReplace(arr, remove, add)
    // 重新排序
    insertSortFromIndex(arr, index)
}

function insertSortFromIndex(arr, index) {
    let flag = false
    while (index >= 1 && arr[index - 1] > arr[index]) {
        [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]]
        index--
        flag = true
    }
    if (flag) return
    while (index < arr.length - 1 && arr[index + 1] < arr[index]) {
        [arr[index + 1], arr[index]] = [arr[index], arr[index + 1]]
        index++
    }
}

function binarySearchReplace(arr, remove, add) {
    let index = binarySearch(arr, remove, 0, arr.length - 1)
    arr[index] = add
    return index
}

function binarySearch(arr, target, start, end) {
    if (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            start = mid + 1
            return binarySearch(arr, target, start, end)
        } else {
            end = mid - 1
            return binarySearch(arr, target, start, end)
        }
    } else {
        return -1
    }
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = medianSlidingWindow;
// @after-stub-for-debug-end