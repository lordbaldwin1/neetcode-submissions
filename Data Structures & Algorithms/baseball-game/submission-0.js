class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            if (op === "+") {
                const num1 = stack.at(-1);
                const num2 = stack.at(-2);
                stack.push(num1 + num2);
            } else if (op === "D") {
                const num = stack.at(-1);
                stack.push(num * 2);
            } else if (op === "C") {
                stack.pop();
            } else {
                const num = parseInt(op);
                stack.push(num);
            }
        }
        return stack.reduce((sum, cur) => {
            return sum + cur;
        }, 0);
    }
}
