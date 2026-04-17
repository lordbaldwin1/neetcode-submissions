class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const exists = {};

        for (const num of nums) {
            if (exists[num] !== undefined) {
                return true;
            }

            exists[num] = true;
        }

        return false;
    }
}
