class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[0];

        // [3,4,5,6,1,2]
        while (l <= r) {
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }

            const m = Math.floor((l + r) / 2);
            res = Math.min(nums[m], res);

            if (nums[l] <= nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}
