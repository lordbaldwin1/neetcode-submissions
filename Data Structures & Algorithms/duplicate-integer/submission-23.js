class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashmap = {};
        for (const num of nums) {
            if (hashmap[num]) {
                return true;
            }
            hashmap[num] = true;
        }
        return false;
    }
}
