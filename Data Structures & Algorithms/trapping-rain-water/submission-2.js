class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;
        let l = 0;
        let r = height.length - 1;
        let maxl = 0;
        let maxr = 0;


        while (l < r) {
            let water = 0
            if (height[r] > maxr) {
                    maxr = height[r];
            }
            if (height[l] > maxl) {
                    maxl = height[l]
            }
            if (maxr < maxl) {
                water =  maxr - height[r];
                if (water > 0) {
                    res += water;
                }
                r--;
            } else {
                water = maxl - height[l];
                if (water > 0) {
                    res += water;
                }
                l++;
            }
        }
        return res;
    }
}
