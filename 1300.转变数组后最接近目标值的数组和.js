/*
 * @lc app=leetcode.cn id=1300 lang=javascript
 *
 * [1300] 转变数组后最接近目标值的数组和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function (arr, target) {
    arr.sort((a, b) => a - b);
    // 缓存求和
    const sums = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        sums[i] = sums[i - 1] + arr[i];
    }

    // 获取以value为分界的和
    function getSum(value) {
        let left = 0, right = arr.length, mid, sum;
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            if (arr[mid] > value) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        if (left === 0) {
            sum = arr.length * value;
        } else if (left === arr.length) {
            sum = sums[arr.length - 1];
        } else {
            sum = sums[left - 1] + (arr.length - left) * value;
        }
        return sum;
    }

    const avg = Math.floor(target / arr.length);
    let lowerBound = avg;
    let higherBound = arr[arr.length - 1] + 1;
    let min = Infinity, diff = target;
    while (lowerBound < higherBound) {
        const mid = Math.floor((lowerBound + higherBound) / 2);
        const sum = getSum(mid);
        const newDiff = sum - target;
        if (newDiff < 0) {
            lowerBound = mid + 1;
        } else {
            higherBound = mid;
        }
        if (Math.abs(newDiff) < diff) {
            diff = Math.abs(newDiff);
            min = mid;
        } else if (Math.abs(newDiff) === diff) {
            min = Math.min(min, mid);
        }
    }
    return min;
};
// @lc code=end

// const arr = [20693,79539,84645,66727,81334,185,14263,53984,71844,71546];
// const target = 39947; // 4418
// const arr = [4, 9, 3];
// const target = 10; // 3
const arr = [2, 3, 5];
const target = 10; // 5
const rst = findBestValue(arr, target);
console.log(rst);