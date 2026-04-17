class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            if (count[num] === undefined) {
                count[num] = 1;
            } else {
                count[num] += 1;
            }
        }

        const arr = Object.entries(count).map(([num, freq]) => [parseInt(num), freq]);
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, k).map(pair => pair[0]);
    }
}
