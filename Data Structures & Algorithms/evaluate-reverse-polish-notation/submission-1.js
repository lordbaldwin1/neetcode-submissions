class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const c of tokens) {
            if (c === "*") {
                stack.push(stack.pop() * stack.pop());
            } else if (c === "/") {
                const num2 = stack.pop();
                const num1 = stack.pop();
                stack.push(Math.trunc(num1 / num2))
            } else if (c === "+") {
                stack.push(stack.pop() + stack.pop())
            } else if (c === "-") {
                const num2 = stack.pop();
                const num1 = stack.pop();
                stack.push(num1 - num2);
            } else {
                stack.push(Number(c));
            }
        }
        return stack.pop();
    }
}
