class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // bucket sort in this hoe
        
        // array where indices are count and values are array of nums at that count

        // get count for values in map: num -> count

        // iterate count map and setup array
        const freq = new Array(nums.length + 1).fill(0).map(() => []);
        const count = {};
        const res = [];

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const [k, v] of Object.entries(count)) {
            freq[v].push(k);
        }

        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                if (res.length === k) return res;
                res.push(n);
            }
        }
        return res;
    }
}
