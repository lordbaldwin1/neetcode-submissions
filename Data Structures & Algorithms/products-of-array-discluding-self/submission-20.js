class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // 1, 2, 4, 6
//pre: 1,  1,  2, 8
//suf: 48, 24, 6, 1
    productExceptSelf(nums) {
        const prefix = [];
        const suffix = [];

        prefix[0] = 1;
        suffix[nums.length - 1] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
