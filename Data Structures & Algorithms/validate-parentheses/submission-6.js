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

        for (const c of s) {
            if (closeToOpen[c]) {
                if (stack.at(-1) === closeToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }
        return stack.length === 0;
    }
}
