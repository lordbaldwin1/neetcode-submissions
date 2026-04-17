class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const s = nums.sort((a, b) => a - b);
        const res = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] > 0) break;
            if (i > 0 && s[i] === s[i-1]) continue;

            let l = i + 1;
            let r = s.length - 1;
            while (l < r) {
                const sum = s[l] + s[r] + s[i];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([s[l], s[r], s[i]]);
                    l++;
                    r--;
                    while (l < r && s[l] === s[l - 1]) {
                        l++;
                    }
                }
            }
        }
        return res;
    }
}
