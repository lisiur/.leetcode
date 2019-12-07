/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sumNums = [0, ...nums]
  for (let i = 0; i < nums.length; ++i) {
    this.sumNums[i+1] += this.sumNums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sumNums[j+1] - this.sumNums[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

var input = [-2, 0, 3, -5, 2, -1]
var output = new NumArray(input).sumRange(0, 5)
console.log(output)