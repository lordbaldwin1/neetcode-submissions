class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        dfs([], new Array(nums.length).fill(false));
        return res;

        function dfs(cur, visited) {
            if (cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!visited[i]) {
                    cur.push(nums[i]);
                    visited[i] = true;
                    dfs(cur, visited);
                    cur.pop();
                    visited[i] = false;
                }
            }
        }
    }
}
