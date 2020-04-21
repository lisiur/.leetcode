/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return head
  }
  let prev = head
  let next = head.next
  while (next) {
    let curr = next
    next = next.next
    curr.next = prev
    prev = curr
  }
  head.next = null
  return prev
};
// @lc code=end

