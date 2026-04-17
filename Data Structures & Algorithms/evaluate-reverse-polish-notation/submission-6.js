class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const c of tokens) {
            switch (c) {
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    const second = stack.pop();
                    const first = stack.pop();
                    stack.push(first - second);
                    break;
                case "/":
                    const secondD = stack.pop();
                    const firstD = stack.pop();
                    stack.push(Math.trunc(firstD / secondD));
                    break;
                default:
                    stack.push(Number(c));
                    break;
            }
        }
        return stack.pop();
    }
}
