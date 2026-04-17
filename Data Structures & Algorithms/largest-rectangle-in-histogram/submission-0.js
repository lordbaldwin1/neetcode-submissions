class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []; // [index, height]
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            let start = i;
            while (stack.length > 0 && stack.at(-1)[1] > heights[i]) {
                const [topIdx, topHeight] = stack.pop();

                const area = (i - topIdx) * topHeight;
                maxArea = Math.max(area, maxArea);
                start = topIdx;
            }
            stack.push([start, heights[i]]);
        }

        for (const [idx, height] of stack) {
            const area = (heights.length - idx) * height;
            maxArea = Math.max(area, maxArea);
        }

        return maxArea;
    }
}
