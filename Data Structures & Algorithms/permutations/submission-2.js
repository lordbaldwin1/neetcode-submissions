class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        dfs([], new Array(nums.length).fill(false));
        return res;

        function dfs(cur, picked) {
            if (cur.length === nums.length) {
                res.push([...cur]);
                return;
            }

            // here we want to generate the permutations for every starting number
            for (let i = 0; i < nums.length; i++) {
                if (picked[i]) {
                    continue;
                }
                picked[i] = true;
                cur.push(nums[i]);
                dfs(cur, picked);
                cur.pop();
                picked[i] = false;
            }
        }
    }
}
