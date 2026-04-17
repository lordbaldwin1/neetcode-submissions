class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
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
