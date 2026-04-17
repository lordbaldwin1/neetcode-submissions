class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        dfs(0, [], 0);
        return res;

        function dfs(i, cur, total) {
            if (total === target) {
                res.push([...cur]);
                return;
            }
            if (i >= nums.length || total > target) {
                return;
            }


            // what are our 2 choices? do we add the same number? or add a different number?
            cur.push(nums[i]);
            dfs(i, cur, total + nums[i]); // add same number
            cur.pop();
            dfs(i + 1, cur, total); // add different number
        }
    }
}
