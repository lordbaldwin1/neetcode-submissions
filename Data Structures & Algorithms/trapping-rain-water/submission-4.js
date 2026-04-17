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
        
        while (l < r) {
            maxl = Math.max(maxl, height[l]);
            maxr = Math.max(maxr, height[r]);

            if (maxl < maxr) {
                let water = maxl - height[l];
                if (water > 0) {
                    res += water;
                }
                l++;
            } else {
                let water = maxr - height[r];
                if (water > 0) {
                    res += water;
                }
                r--;
            }
        }
        return res;
    }
}
