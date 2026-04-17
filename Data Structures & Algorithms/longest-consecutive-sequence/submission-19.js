class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let streak = 1;
                while (set.has(num + streak)) {
                    streak++;
                }
                res = Math.max(res, streak);
            }
        }
        return res;
    }
}
