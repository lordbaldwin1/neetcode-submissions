class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        for (let i = 0; i < heights.length; i++) {

            for (let j = i + 1; j < heights.length; j++) {
                let width = j - i;
                let bottleNeck = Math.min(heights[i], heights[j]);
                if (max < bottleNeck * width) {
                    max = bottleNeck * width;
                }
            }

        }
        return max;
    }
}
