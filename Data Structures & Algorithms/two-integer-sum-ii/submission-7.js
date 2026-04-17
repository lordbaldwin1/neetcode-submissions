class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(n, target) {
        let l = 0;
        let r = n.length - 1;
        while (l < r) {
            const sum = n[l] + n[r];
            if (sum === target) {
                return [l+1, r+1];
            } else if (sum < target) {
                l++;
            } else {
                r--;
            }
        }
        return [];
    }
}
