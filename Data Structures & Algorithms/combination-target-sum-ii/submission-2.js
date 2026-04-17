class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(nums, target) {
        const res = [];
        nums.sort((a, b) => a - b);

        dfs(0, [], 0);
        return res;

        function dfs(i, cur, total) {
            if (total === target) {
                res.push([...cur]);
                return;
            }

            if (total > target || i >= nums.length) {
                return;
            }

            // 2 choices, do we choose the num, or not?
            cur.push(nums[i]);
            dfs(i + 1, cur, total + nums[i]);

            cur.pop();
            while (i + 1 <= nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            dfs(i + 1, cur, total);
        }
    }
}
