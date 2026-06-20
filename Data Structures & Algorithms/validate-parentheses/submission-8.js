class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack: (
        const stack = [];
        const closeToOpen = {
            '}': '{',
            ')': '(',
            ']': '[',
        };

        // pretty much just push
        // when we encounter a close bracket
        // check if it's the right one and pop
        for (const c of s) {
            // always push open brackets
            if (!closeToOpen[c]) {
                stack.push(c);
                continue;
            }

            if (closeToOpen[c] !== stack.at(-1)) {
                return false;
            }

            stack.pop();
        }
        return stack.length === 0;
    }
}
