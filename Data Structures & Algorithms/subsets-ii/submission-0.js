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

        function dfs(i, subset) {
            res.push([...subset]);
            for (let j = i; j < nums.length; j++) {
                if (j > i && nums[j] === nums[j - 1]) {
                    continue;
                }
                subset.push(nums[j]);
                dfs(j + 1, subset);
                subset.pop();
            }
        }
    }
}
