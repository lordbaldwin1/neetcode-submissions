class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // BRUTE FORCE *********************************************
    productExceptSelf(nums) {
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let k = 0; k < nums.length; k++) {
                if (k !== i) {
                    product *= nums[k];
                } 
            }
            result.push(product);
        }
        return result;
    }
}
