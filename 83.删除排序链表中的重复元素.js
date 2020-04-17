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
function delLink(prev, node) {
  prev.next = node.next
  node.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const set = new Set()
  let currNode = head
  let prevNode = null
  while(currNode) {
    let nextNode = currNode.next
    if (set.has(currNode.val)) {
      delLink(prevNode, currNode)
    } else {
      set.add(currNode.val)
      prevNode = currNode
    }
    currNode = nextNode
  }
  return head
};
// @lc code=end


function ListNode(val) {
    this.val = val;
    this.next = null;
}
const head = new ListNode(1)
head.next = new ListNode(1)
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(3)
head.next.next.next.next = new ListNode(3)
deleteDuplicates(head)


