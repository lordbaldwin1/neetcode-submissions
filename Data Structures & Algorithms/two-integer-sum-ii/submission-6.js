class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // two pointer: l & r
        // one start beginning, one start end
        // check, do the values at these indices add to targ?
        // if, return the indices + 1
        // if not, compare the sum to targ
        // if sum < targ, increment l
        // if sum > targ, decrement r
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            const sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l + 1, r + 1];
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
}
