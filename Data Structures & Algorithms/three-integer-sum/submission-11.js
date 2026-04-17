class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
       // sort input array
       // loop through whole array
       // do two pointer 2Sum on i + 1 to nums.length - 1
       // if match, push to result array
       // duplicates:
       // if i === i - 1, continue
       // after pushing result, increment l until its not
       // a dupe
       nums.sort((a, b) => a - b);
       let res = [];

       for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] > 0) break;
        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
       }
       return res;
    }
}
