/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  if (!head) return null
  if (head.next?.val === head.val) {
    head.next = head.next?.next
    return deleteDuplicates(head)
  } else {
    head.next = deleteDuplicates(head.next)
    return head
  }
};
// @lc code=end
