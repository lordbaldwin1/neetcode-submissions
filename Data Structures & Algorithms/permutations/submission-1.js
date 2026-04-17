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
                    visited[i] = true;
                    cur.push(nums[i]);
                    dfs(cur, visited);
                    visited[i] = false;
                    cur.pop();
                }
            }
        }
    }
}
