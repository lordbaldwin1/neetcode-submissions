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
        let cur = head;
        let count = 0;
        while (cur) {
            cur = cur.next;
            count++;
        }

        count = count - n;
        if (count === 0) {
            return head.next;
        }
        let curCount = 0;
        cur = head;

        while(cur) {
            if ((curCount + 1) === count) {
                cur.next = cur.next.next;
                break;
            }
            cur = cur.next;
            curCount++;
        }
        return head;
    }
}
