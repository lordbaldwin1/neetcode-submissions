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

            if (nums[l] <= nums[m]) { // left sorted
                if (target <= nums[m] && target >= nums[l]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            } else { // right is sorted
                if (target <= nums[r] && target >= nums[m]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        return -1;
    }
}
