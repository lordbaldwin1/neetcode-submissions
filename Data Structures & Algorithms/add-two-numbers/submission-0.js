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
        let num1 = [];
        let num2 = [];

        // init num arrays
        while (l1) {
            num1.push(l1.val);
            l1 = l1.next;
        }
        while (l2) {
            num2.push(l2.val);
            l2 = l2.next;
        }

        // reverse num arrays
        num1.reverse();
        num2.reverse();

        const num1Str = num1.join("");
        const num2Str = num2.join("");

        const num1num = parseInt(num1Str);
        const num2num = parseInt(num2Str);

        const res = num1num + num2num;
        const resStr = res.toString();
        const resArr = resStr.split("");
        resArr.reverse();

        let dummy = new ListNode();
        let curr = dummy;
        for (let i = 0; i < resArr.length; i++) {
            curr.next = new ListNode(parseInt(resArr[i]), null);
            curr = curr.next;
        }
        return dummy.next;
    }
}





