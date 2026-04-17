class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let minVal = nums[l];

        while (l <= r) {
            if (nums[r] >= nums[l]) {
                minVal = Math.min(nums[l], minVal);
                break;
            }

            const mid = Math.floor((l + r) / 2);
            minVal = Math.min(minVal, nums[mid]);

            if (nums[mid] >= nums[l]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return minVal;
    }
}
