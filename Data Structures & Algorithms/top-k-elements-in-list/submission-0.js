class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};
        for (let i = 0; i < nums.length; i++) {
            if (count[nums[i]] === undefined) {
                count[nums[i]] = 1;
            } else {
                count[nums[i]] += 1;
            }
        }

        const array = Object.entries(count).map(([key, value]) => [parseInt(key), value]);
        array.sort((a, b) => b[1] - a[1]);

        return array.slice(0, k).map(pair => pair[0]);
    }
}
