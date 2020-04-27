/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }

  let newHead = head.next
  let prev = null
  let curr = head
  let next = curr.next
  while (next) {
    curr.next = next.next
    next.next = curr
    if (prev) {
      prev.next = next
    }
    prev = curr
    curr = curr && curr.next || null
    next = curr && curr.next || null
  }
  return newHead
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = swapPairs;
// @after-stub-for-debug-end