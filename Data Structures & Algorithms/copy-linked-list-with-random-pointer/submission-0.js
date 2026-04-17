// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const newCopy = new Map();
        newCopy.set(null, null);

        let cur = head;
        while (cur) {
            const copy = new Node(cur.val);
            newCopy.set(cur, copy);
            cur = cur.next;
        }

        cur = head;
        while (cur) {
            const copy = newCopy.get(cur);
            copy.next = newCopy.get(cur.next);
            copy.random = newCopy.get(cur.random);
            cur = cur.next;
        }
        return newCopy.get(head);
    }
}
