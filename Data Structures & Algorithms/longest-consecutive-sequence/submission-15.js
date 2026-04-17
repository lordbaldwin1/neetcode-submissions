class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            if (!numSet.has(num - 1)) {
                let streak = 1;

                while (numSet.has(num + streak)) {
                    streak++;
                }
                longest = Math.max(streak, longest);
            }
        }
        return longest;
    }
}
