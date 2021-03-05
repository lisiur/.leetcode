/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.mainStack = []
  this.supportStack = []
};

MyQueue.prototype.transport = function() {
  if (!this.supportStack.length) {
    while (this.mainStack.length > 0) {
      this.supportStack.push(this.mainStack.pop())
    }
  }
}

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.mainStack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  this.transport()
  if (!this.supportStack.length) {
    throw new Error()
  }
  return this.supportStack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  this.transport()
  if (!this.supportStack.length) {
    throw new Error()
  }
  return this.supportStack[this.supportStack.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.mainStack.length + this.supportStack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

