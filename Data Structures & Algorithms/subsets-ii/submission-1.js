class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];
        nums.sort((a, b) => a - b);
        dfs(0, []);
        return res;

        function dfs(start, cur) {
            res.push([...cur]);
            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                cur.push(nums[i]);
                dfs(i + 1, cur);
                cur.pop();
            }
        }
    }
}
