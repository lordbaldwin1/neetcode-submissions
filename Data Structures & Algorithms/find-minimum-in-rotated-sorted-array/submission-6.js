class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let res = nums[l];

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (nums[l] <= nums[r]) {
                res = Math.min(nums[l], res);
                break;
            }

            res = Math.min(res, nums[m]);

            if (nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
