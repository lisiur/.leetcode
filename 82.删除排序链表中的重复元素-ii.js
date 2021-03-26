/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let guard = {
        next: head
    }
    let parent = guard
    while (parent && parent.next) {
        let node = parent.next
        let child = node?.next
        if (node.val === child?.val) {
            let val = node.val
            while(node?.val === val) {
                removeNode(parent)
                node = parent.next
            }
        } else {
            parent = node
        }
    }
    return guard.next
};

function removeNode(parent) {
    if (!parent) return
    parent.next = parent.next?.next
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end