class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];
        dfs(0, 0, []);
        return res;
        // push opens while openN < n
        // pop then push closed

        function dfs(openN, closedN, cur) {
            if (openN === closedN && openN === n) {
                res.push([...cur].join(""));
                return;
            }

            if (openN < n) {
                cur.push("(");
                dfs(openN + 1, closedN, cur);
                cur.pop();
            }

            if (closedN < openN) {
                cur.push(")");
                dfs(openN, closedN + 1, cur);
                cur.pop();
            }
        }
    }
}
