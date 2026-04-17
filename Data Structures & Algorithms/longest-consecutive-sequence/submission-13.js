class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = {};
        let res = 0;

        for (const n of nums) {
            map[n] = 1;
        }

        let streak = 0;
        for (const num in map) {
            if (map[(parseInt(num) - 1).toString()] === undefined) {
                streak = 1;
                while(map[(parseInt(num) + streak).toString()] !== undefined) {
                    streak++;
                }
                res = Math.max(streak, res);
            }
        }
        return res;
    }
}
