class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count : num -> count
        // freq : count -> num[]
        // results: resulting nums
        let count = {};
        let freq = Array.from({ length: nums.length + 1}, () => []);

        for (const n of nums) {
            if (count[n] === undefined) {
                count[n] = 1;
            } else {
                count[n] += 1;
            }
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        let result = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }
    }
}
