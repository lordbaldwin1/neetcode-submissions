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
        for (const [num, freq] of Object.entries(count)) {
            heap.enqueue([num, freq]);
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
