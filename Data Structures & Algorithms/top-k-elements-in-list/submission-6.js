class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = Array.from({ length: nums.length + 1}, () => []);

        for (const num of nums) {
            if (count[num] === undefined) {
                count[num] = 1;
            } else {
                count[num] += 1;
            }
        }

        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
