class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       const s = nums.sort((a, b) => a - b);
       // [-4, -1, -1, 0, 1, 2]
       const res = [];
       for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[l] + nums[r] + nums[i];
            if (sum === 0) {
                res.push([nums[l], nums[r], nums[i]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l-1]) {
                    l++;
                }
            } else {
                if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
       }
       return res;
    }
}
