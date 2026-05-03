class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // we need map: num -> count
        // then array of len nums.length + 1
        const bucket = Array.from({ length: nums.length + 1 }).map(() => []);
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        // num: count
        for (const [key, val] of Object.entries(count)) {
            bucket[val].push(Number(key));
        }

        const res = [];
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                if (res.length >= k) {
                    return res;
                }
                res.push(num);
            }
        }
        return res;
    }
}
