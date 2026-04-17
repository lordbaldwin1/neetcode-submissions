class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let res = [];
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let twoSum = numbers[l] + numbers[r];
            if (twoSum === target) {
                return [l + 1, r + 1];
            } else if (twoSum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
}
