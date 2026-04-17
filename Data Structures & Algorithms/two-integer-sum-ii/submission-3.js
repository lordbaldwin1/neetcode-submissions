class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let twoSum = numbers[l] + numbers[r];

            if (twoSum < target) {
                l++;
            } else if (twoSum > target) {
                r--;
            } else {
                return [l + 1, r + 1];
            }
        }
        return [];
    }
}
