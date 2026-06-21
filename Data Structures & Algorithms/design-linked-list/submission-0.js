class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode(0);
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }
        let curr = this.head.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newHead = new ListNode(val);
        newHead.next = this.head.next;
        this.head.next = newHead;
        this.size += 1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new ListNode(val);
        this.size += 1;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index > this.size) {
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        const temp = curr.next;
        curr.next = new ListNode(val);
        curr.next.next = temp;
        this.size += 1;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index > this.size - 1) {
            return;
        }
        let prev = null;
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.next;
        }
        prev.next = curr.next;
        this.size--;
    }
}
