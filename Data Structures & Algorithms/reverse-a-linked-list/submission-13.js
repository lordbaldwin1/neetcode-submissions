/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */

    // 0 -> 1 -> 2 -> 3 -> null
    reverseList(head) {
        if (!head) return null

        // we need to set the new head as we go
        let newHead = head
        if (head.next) {
            newHead = this.reverseList(head.next)
            // need to reverse list as we return
            head.next.next = head
            head.next = null
        }
        return newHead
    }
}
