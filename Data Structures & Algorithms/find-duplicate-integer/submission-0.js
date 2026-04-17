class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let map = {};

        for (const num of nums) {
            if (map[num] !== undefined) {
                return num;
            }
            map[num] = true;
        }
        return -1;
    }
}
