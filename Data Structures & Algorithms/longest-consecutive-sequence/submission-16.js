class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // make set with nums (unique values)
        // iterate through entire set
        // if no numSet.has(n - 1), new sequence
        // check if numSet.has(n + 1), increment streak
        // then iterate again
        const numSet = new Set(nums);
        let longest = 0;

        for (const n of numSet) {
            let streak;
            if (!numSet.has(n - 1)) {
                streak = 1;
            

            while (numSet.has(n + streak)) {
                ++streak;
            }
            longest = Math.max(streak, longest);
            }
        }
        return longest;
    }
}
