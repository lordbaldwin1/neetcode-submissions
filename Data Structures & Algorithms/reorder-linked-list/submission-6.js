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
        // split list, reverse second list, add them shits together
        let fast = head;
        let slow = head;
        while (fast?.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second) {
            const temp = second.next;
            second.next = prev;
            prev = second;
            second = temp;
        }
        
        let first = head;
        second = prev;

        // 1 -> 2 -> 3 -> 4 -> null
        // 2 -> 3 -> 4 -> 5 -> null
        while(first && second) {
            const temp1st = first.next;
            const temp2nd = second.next;
            first.next = second;
            second.next = temp1st;
            first = temp1st;
            second = temp2nd;
        }
        return head;
    }
}











