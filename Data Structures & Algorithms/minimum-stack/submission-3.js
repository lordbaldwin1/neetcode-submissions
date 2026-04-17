class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push([val, val]);
            return;
        }
        const currMin = this.stack[this.stack.length - 1][1];
        this.stack.push([val, Math.min(val, currMin)]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const n = this.stack.length;
        return this.stack[n - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        const n = this.stack.length;
        return this.stack[n - 1][1];
    }
}
