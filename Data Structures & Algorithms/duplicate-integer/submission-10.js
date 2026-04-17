class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (j !== i && nums[j] === nums[i]) {
                    return true;
                }
            }
        }
        return false;
    }
}
