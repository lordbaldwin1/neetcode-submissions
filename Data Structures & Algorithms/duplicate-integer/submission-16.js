class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for (const num of nums) {
            if (map[num] !== undefined) {
                return true;
            }
            map[num] = true;
        }
        return false;
    }
}
