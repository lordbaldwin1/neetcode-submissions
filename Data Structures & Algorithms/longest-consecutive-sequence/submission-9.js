class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let maxSeq = 0;

        for (const n of nums) {
            if (!numSet.has(n - 1)) {
                let curLength = 1;
                while (numSet.has(n + curLength)) {
                curLength +=1;

            }
            maxSeq = Math.max(maxSeq, curLength);
            }
        }
        return maxSeq;
    }
}
