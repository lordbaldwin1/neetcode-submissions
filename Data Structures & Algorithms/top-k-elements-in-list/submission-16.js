class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count : num -> freq
        // freq : freq -> num[]
        let count = {};
        let freq = new Array(nums.length + 1).fill(0).map(() => []);

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        for (const num in count) {
            freq[count[num]].push(parseInt(num));
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
