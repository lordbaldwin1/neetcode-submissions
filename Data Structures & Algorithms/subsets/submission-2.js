class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        function dfs(i, cur) {
            if (i >= nums.length) {
                res.push([...cur]);
                return;
            }

            cur.push(nums[i]);
            dfs(i + 1, cur); // left decision, add a num
            cur.pop();
            dfs(i + 1, cur); // right decision, that num didn't work
        }
        dfs(0, []);
        return res;
    }
}
