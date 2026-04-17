class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (const n of nums) {
            if (map[n] !== undefined) {
                return true;
            }

            map[n] = 1;
        }
        return false;
    }
}
