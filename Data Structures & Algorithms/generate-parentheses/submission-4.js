class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const stack = [];
        const res = [];
        dfs(0, 0);
        return res;

        function dfs(openN, closedN) {
            if (closedN === n) {
                res.push(stack.join(""));
                return;
            }

            if (openN < n) {
                stack.push("(");
                dfs(openN + 1, closedN);
                stack.pop();
            }

            if (closedN < openN) {
                stack.push(")");
                dfs(openN, closedN + 1);
                stack.pop();
            }
        }
    }
}
