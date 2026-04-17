class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        let freq = Array.from({ length: nums.length + 1 }, () => [])

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (const key in count) {
            freq[count[key]].push(key);
        }

        let res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const num of freq[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }

        }
    }
}
