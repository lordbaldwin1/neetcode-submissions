class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;
        let maxl = 0;
        let maxr = 0;
        let l = 0;
        let r = height.length - 1;
        let water = 0;

        while (l < r) {
            if (maxl < height[l]) {
                maxl = height[l];
            }
            if (maxr < height[r]) {
                maxr = height[r];
            }

            if (maxl < maxr) {
                water = maxl - height[l];
                if (water > 0) {
                    res += water;
                }
                l++;
            } else {
                water = maxr - height[r];
                if (water > 0) {
                    res += water;
                }
                r--;
            }
        }
        return res;
    }
}
