class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let zeroCount = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroCount++;
            } else {
                product *= nums[i];
            }
        }

        if (zeroCount > 1) {
            return new Array(nums.length).fill(0)
        }

        let res = new Array(nums.length)
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = (nums[i] === 0) ? product : 0;
            } else {
                res[i] = product / nums[i]
            }
        }
        return res;
    }
}
