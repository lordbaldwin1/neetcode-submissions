class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        // move all elements that are not val to the front of the array
        // keep track of location to add, iterate a point until we find an instance of num that is not val
        let toAddIdx = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] !== val) {
                nums[toAddIdx] = nums[r];
                toAddIdx++;
            }
        }
        return toAddIdx;
    }
}
