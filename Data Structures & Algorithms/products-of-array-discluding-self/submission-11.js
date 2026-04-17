class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = new Array(nums.length);
        const postfix = new Array(nums.length);
        const output = new Array(nums.length);

        prefix[0] = nums[0];
        postfix[nums.length - 1] = nums[nums.length - 1];
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i] * prefix[i - 1];
        }
        for (let i = (nums.length-2); i > 0; i--) {
            postfix[i] = nums[i] * postfix[i + 1];
        }

        output[0] = 1*postfix[1]
        output[nums.length - 1] = 1*prefix[nums.length - 2]
        for (let i = 1; i < nums.length - 1; i++) {
            output[i] = prefix[i - 1]*postfix[i + 1];
        }
        return output;
    }
}
