class MinStack {
    constructor() {
        // stack will be array of [val, min]
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
        const topMin = this.stack.at(-1)[1];
        const newMin = Math.min(topMin, val);
        this.stack.push([val, newMin]);
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
        return this.stack.at(-1)[0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack.at(-1)[1];
    }
}
