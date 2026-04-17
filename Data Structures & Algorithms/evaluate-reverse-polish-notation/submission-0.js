class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            const isOperator = tokens[i] === "*" || tokens[i] === "+" || tokens[i] === "/" || tokens[i] === "-"

            if (isOperator) {
                const num2 = stack.pop();
                const num1 = stack.pop();
                switch (tokens[i]) {
                    case "*":
                        stack.push(Math.trunc(num1 * num2));
                        break;
                    case "/":
                        stack.push(Math.trunc(num1 / num2));
                        break;
                    case "+":
                        stack.push(num1 + num2);
                        break;
                    case "-":
                        stack.push(num1 - num2);
                        break;
                }
            } else {
                stack.push(Number(tokens[i]))
            }
        }
        return stack.pop()
    }
}
