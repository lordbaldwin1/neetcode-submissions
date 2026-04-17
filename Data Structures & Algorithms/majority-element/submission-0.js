class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {};

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        const res = [0, 0];
        for (const [num, count] of Object.entries(map)) {
            if (count > res[1]) {
                res[0] = num;
                res[1] = count;
            }
        }
        return res[0];
    }
}
