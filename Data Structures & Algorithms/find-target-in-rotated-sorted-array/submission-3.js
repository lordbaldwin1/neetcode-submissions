class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (nums[m] === target) {
                return m;
            }

            // [3,4,5,6,1,2]
            // we're in left sorted portion
            if (nums[l] <= nums[m]) {
                if (nums[l] > target || nums[m] < target) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            } else {
                // right sorted portion
                if (nums[r] < target || nums[m] > target) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
        }
        return -1;
    }
}
