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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let res = dummy;

        // l1 = [1,6,3,5]
        // l2 = [4,5,6]
        // rs = [5,1,0,6];
        // if sum > 10, 

        let carry = 0;
        while (l1 || l2 || carry) {
            const val1 = l1 ? l1.val : null;
            const val2 = l2 ? l2.val : null;

            let val = val1 + val2 + carry;
            carry = Math.floor(val / 10);
            val = val % 10;
            
            res.next = new ListNode(val);
            res = res.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return dummy.next;
    }
}
