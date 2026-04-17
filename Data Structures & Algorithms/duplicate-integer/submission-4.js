class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for (const num of nums) {
            if (map[num] !== undefined) {
                return true;
            } else {
                map[num] = 1;
            }
        }
        return false;
    }
}
