class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for (let i = 0; i < nums.length; i++) {
            if (map[nums[i]] === undefined) {
                map[nums[i]] = 1;
            } else {
                map[nums[i]] += 1;
            }

            if (map[nums[i]] > 1) {
                return true;
            }

        }
        return false;
    }
}
