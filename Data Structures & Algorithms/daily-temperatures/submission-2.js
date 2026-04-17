class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Intuition:
        // [2, 1, 1, 3]: When at 3, we can check the previous indices if they are smaller, and compute the difference between the indices
        // Keep track of the indices in a monotonically decreasing order stack (maintain that the stack is decreasing)
        // When we encounter a number that is greater than the top of the stack:
            // Pop that element from the stack, store the difference between that element
            // and the current element and store that in the place of the popped element.

        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const top = stack.pop();
                const diff = i - top;
                res[top] = diff;
            }
            stack.push(i);
        }
        return res;
    }
}
