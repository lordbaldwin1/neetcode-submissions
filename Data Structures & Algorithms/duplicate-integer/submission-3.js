class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (const n of nums) {
            if (map[n] === undefined) {
                map[n] = 1;
            } else {
                map[n] += 1;
            }

            if (map[n] > 1) {
                return true;
            }
        }
        return false;
    }
}
