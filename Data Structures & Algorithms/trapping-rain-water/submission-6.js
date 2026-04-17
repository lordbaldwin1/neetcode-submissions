class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;
        let res = 0;
        let lMax = height[l];
        let rMax = height[r];

        while (l < r) {
            lMax = Math.max(lMax, height[l]);
            rMax = Math.max(rMax, height[r]);

            if (lMax < rMax) {
                const water = lMax - height[l];
                if (water > 0) {
                    res += water;
                }
                l++;
            } else {
                const water = rMax - height[r];
                if (water > 0) {
                    res += water;
                }
                r--;
            }
        }
        return res;
    }
}
