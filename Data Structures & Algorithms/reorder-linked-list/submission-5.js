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
        // first find halfway point
        let slow = head
        let fast = head
        while (fast?.next) {
            slow = slow.next
            fast = fast.next.next
        }

        // reverse second list, prev is head of it!
        let second = slow.next
        slow.next = null
        let prev = null
        while (second) {
            const temp = second.next
            second.next = prev
            prev = second
            second = temp
        }

        // merge lists starting with list1
        let first = head
        second = prev

        // 0 -> 1 -> 2 -> 3 -> null
        // 6 -> 5 -> 4 -> null
        while (first && second) {
            const firstTemp = first.next
            const secondTemp = second.next
            first.next = second
            second.next = firstTemp
            first = firstTemp
            second = secondTemp
        }
        return head
    }
}







