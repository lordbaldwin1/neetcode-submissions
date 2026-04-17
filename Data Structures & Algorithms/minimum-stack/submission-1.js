class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const n = this.stack.length
        if (n === 0) {
            this.stack.push([val, val])
        } else {
        const minVal = this.stack[n - 1][1]
        this.stack.push([val, Math.min(minVal, val)])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        const n = this.stack.length
        return this.stack[n-1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        const n = this.stack.length
        return this.stack[n-1][1]
    }
}
