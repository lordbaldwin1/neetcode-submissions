class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {};

        for (const n of nums) {
            if (count[n] !== undefined) {
                return true;
            }
            count[n] = (count[n] || 0) + 1;
        }
        return false;
    }
}
