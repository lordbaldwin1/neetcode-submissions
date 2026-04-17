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
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            let temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }

        //prev = 2nd list
        //head = 1slt list
        while (head && prev) {
            let htemp = head.next;
            let ptemp = prev.next;
            head.next = prev;
            prev.next = htemp;
            head = htemp;
            prev = ptemp;
        }
    }
}
