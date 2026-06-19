class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // keep a count for each 1
        // reset it when we hit a non-1
        let count = 0;
        let max = 0;
        for (const num of nums) {
            count++;
            if (num !== 1) {
                count = 0;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}
