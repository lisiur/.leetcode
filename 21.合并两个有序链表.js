/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var list = new ListNode()
  var temp = list
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      temp.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      temp.next = new ListNode(l2.val)
      l2 = l2.next
    }
    temp = temp.next
  }
  temp.next = !l1 ? l2 : l1
  return list.next
};

// @lc code=end

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
 
// function printList(node) {
//   var str = ''
//   if (node !== null) {
//     str += node.val
//   }
//   node = node.next
//   while(node) {
//     str += `->${node.val}`
//     node = node.next
//   }
//   console.log(str)
// }

// var node1 = new ListNode(1)
// node1.next = new ListNode(2)
// node1.next.next = new ListNode(4)

// var node2 = new ListNode(1)
// node2.next = new ListNode(3)
// node2.next.next = new ListNode(4)

// printList(node1)
// printList(node2)
// printList(mergeTwoLists(node1, node2))

// printList(mergeTwoLists(null, node1))
