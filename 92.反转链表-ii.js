/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let leftParent = null
    let guard = {
        next: head
    }
    let index = 0
    let iter = guard
    while (index !== left) {
        leftParent = iter
        iter = iter.next
        index++
    }

    index++
    let prev, middle, next
    prev = iter
    middle = iter?.next
    next = middle?.next
    while (index <= right) {
        if (middle) {
            middle.next = prev
        }
        prev = middle
        middle = next
        next = next?.next
        index++
    }
    leftParent.next.next = middle
    leftParent.next = prev
    return guard.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseBetween;
// @after-stub-for-debug-end