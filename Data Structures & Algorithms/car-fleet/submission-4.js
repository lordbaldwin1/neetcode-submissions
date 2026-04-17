class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // if we sort by position and loop starting at the furthest (greatest) position
        // we can push time to reach target to the stack
        // if the top of the stack gets there slower than the one before it, we pop because that makes a fleet
        const stack = [];
        const pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);
        for (const [p, s] of pairs) {
            stack.push((target - p) / s);
            if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
