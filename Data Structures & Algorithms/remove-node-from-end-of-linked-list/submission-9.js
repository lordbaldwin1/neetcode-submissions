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
        // iteration (two pass)
        // count length of list
        // length of list - n = n from the start!

        let listN = 0;
        let curr = head;
        while (curr) {
            listN++;
            curr = curr.next;
        }

        const removeIdx = listN - n;
        if (removeIdx === 0) {
            return head.next;
        }
        curr = head;
        for (let i = 0; i < listN; i++) {
            if (i + 1 === removeIdx) {
                curr.next = curr.next.next;
                return head;
            }
            curr = curr.next;
        }

    }
}







