class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // push temps until you reach a temp that is greater than the top of the stack
        // pop until stack is in decreasing order once again
        // stack will store, temp and index [temp, idx];
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack.at(-1)[0]) {
                const [_temp, idx] = stack.pop();
                res[idx] = i - idx;
            }
            stack.push([temperatures[i], i]);
        }
        return res;
    }
}
