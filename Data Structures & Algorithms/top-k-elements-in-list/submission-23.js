class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // make a count map
        // sort it into array based on count
        let count = {};

        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        let arr = Object.entries(count).map(([num, freq]) => [parseInt(num), freq]);
        arr.sort((a, b) => b[1] - a[1]);
        return arr.slice(0, k).map((pair) => pair[0]);

    }
}
