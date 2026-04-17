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

        let list2 = slow.next;
        slow.next = null;

        let prev = null;
        while (list2) {
            const temp = list2.next;
            list2.next = prev;
            prev = list2;
            list2 = temp;
        }

        let list1 = head;
        list2 = prev;
        while (list1 && list2) {
            const temp1 = list1.next;
            const temp2 = list2.next;
            list1.next = list2;
            list2.next = temp1
            list1 = temp1;
            list2 = temp2;
        }

        return head;
    }
}
