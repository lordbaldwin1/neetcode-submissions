class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(nums.length).fill(1);

        for (let i = 1; i < n; i++) {
            res[i] = nums[i - 1] * res[i - 1];
        }

        let suff = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= suff;
            suff *= nums[i];
        }

        return res;
    }
}
