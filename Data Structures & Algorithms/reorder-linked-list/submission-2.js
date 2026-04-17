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
        if (!head) return;

        let nodes = [];
        let cur = head;
        while (cur) {
            nodes.push(cur);
            cur = cur.next;
        }

        let l = 0;
        let r = nodes.length -1;
        while (l < r) {
            nodes[l].next = nodes[r];
            l++;
            if (l >= r) break;;
            nodes[r].next = nodes[l];
            r--;
        }
        return nodes[l].next = null;
    }
}
