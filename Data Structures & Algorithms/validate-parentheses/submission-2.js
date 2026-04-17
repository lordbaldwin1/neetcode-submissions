class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closeToOpen = {
            '}': '{',
            ']': '[',
            ')': '(',
        };

        const stack = [];
        for (const b of s) {
            // if its a closing bracket
            if (closeToOpen[b]) {
                // if there is something in the stack and it is the closing bracket
                // to our last open bracket, pop our thing, we found the match
                // OTHERWISE, we either start with a closing bracket or, it's not the matching
                // closing bracket, OR we have 2 closing brackets
                if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[b]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(b);
            }
        }
        return stack.length === 0;
    }
}
