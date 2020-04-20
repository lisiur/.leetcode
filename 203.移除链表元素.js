/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (45.08%)
 * Likes:    373
 * Dislikes: 0
 * Total Accepted:    71.9K
 * Total Submissions: 159.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 *
 * 示例:
 *
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 *
 *
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while(head && head.val === val) {
    head = head.next
  }
  if (!head) {
    return head
  }
  let prev = head
  let node = head.next
  while(node) {
    if (node.val === val) {
      prev.next= node.next
    } else {
      prev = node
    }
    node = node.next
  }
  return head
};
// @lc code=end

