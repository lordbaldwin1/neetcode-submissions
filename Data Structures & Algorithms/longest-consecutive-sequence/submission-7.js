class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }
        nums.sort((a, b) => a - b);

        let cur = 1;
        let long = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i-1] + 1) {
                cur += 1;
            } else if (nums[i] !== nums[i-1]) {
                cur = 1;
            }
            long = Math.max(long, cur);
        }
        return long;
    }
}
