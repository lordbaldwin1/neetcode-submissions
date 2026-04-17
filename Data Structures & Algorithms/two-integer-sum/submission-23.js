class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        // iterate through nums
        // need num : index
        // calc target - current num
        // check if that exists in map
        // check if its not current index
        // if it exists and is not current index, return index from map and current index

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            if (map[diff] !== undefined && map[diff] !== i) {
                return [map[diff], i];
            }

            map[nums[i]] = i;
        }
        return [];
    }
}
