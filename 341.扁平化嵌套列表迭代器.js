/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.stack = [[nestedList, 0]]
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while (true) {
        let [list, index] = this.stack[this.stack.length - 1]
        while (index >= list.length) {
            this.stack.pop()
            if (this.stack.length === 0) {
                return false
            }
            [list, index] = this.stack[this.stack.length - 1]
        }
        if (list[index].isInteger()) {
            return true
        } else {
            this.stack[this.stack.length - 1][1]++
            this.stack.push([list[index].getList(), 0])
        }
    }
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    if (this.hasNext()) {
        const [list, index] = this.stack[this.stack.length - 1]
        this.stack[this.stack.length - 1][1]++
        return list[index].getInteger()
    } else {
        throw new Error('non')
    }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

var i = new NestedIterator([[1,1],2,[1,1]]), a = [];
while (i.hasNext()) a.push(i.next())
console.log(a);


// @after-stub-for-debug-begin
module.exports = NestedIterator;
// @after-stub-for-debug-end