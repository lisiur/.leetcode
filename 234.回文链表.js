/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let prev = null
  while(slow) {
    let next = slow.next
    slow.next = prev
    prev = slow
    slow = next
  }

  while(prev && head) {
    if (prev.val !== head.val) {
      return false
    }
    prev = prev.next
    head = head.next
  }
  return true
};
// @lc code=end

