class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for (let i = 0; i < nums.length; i++) {
            count[nums[i]] = (count[nums[i]] || 0) + 1;
        }

        let heap = new MinPriorityQueue(x => x[1]);
        for (const key in count) {
            heap.enqueue([key, count[key]]);
            if (heap.size() > k) {
                heap.dequeue();
            }
        }

        let res = [];
        while (res.length < k) {
            let [num, freq] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}
