class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // [3, 2, 2, 3], val = 3
        // two pointer
        let l = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[l] = nums[i];
                l++;
            }
        }
        return l
    }
}
