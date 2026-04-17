class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = new Array(nums.length + 1).fill(0).map(() => []);

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (const key in count) {
            freq[count[key]].push(key);
        }

        let res = [];
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
