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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // 2 pointer
        // 1 pointer loop n times
        if (!head?.next) {
            return null;
        }

        let left = head;
        let right = head;
        while (n > 0) {
            right = right.next;
            n--;
        }

        if (!right) {
            return head.next;
        }
        while (right?.next) {
            right = right.next;
            left = left.next;
        }

        left.next = left.next.next;
        return head;
    }
}

