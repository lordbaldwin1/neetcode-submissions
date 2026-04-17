class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // monotonic decreasing stack
        // stack => [temp, idx]
        // while temp[i] > stack.at(-1)[t]
        //      pop item from stack
        //      store i - stackidx in res at stackidx

        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack.at(-1)[0]) {
                const [_sTemp, sIdx] = stack.pop();
                res[sIdx] = i - sIdx;
            }

            stack.push([temperatures[i], i]);
        }
        return res;
    }
}
