class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;
        let cur = 0;

        for (const num of nums) {
            // check if start of a sequence
            if (!numSet.has(num - 1)) {
                cur = 1;
                while (numSet.has(num + cur)) {
                    cur++;
                }
                longest = Math.max(cur, longest);
            }
        }
        return longest;
    }
}
