class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];
        dfs(0, []);
        return res;

        function dfs(i, cur) {
            if (i === nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[i]);
            dfs(i + 1, cur);

            cur.pop();
            dfs(i + 1, cur);
        }
    }
}
