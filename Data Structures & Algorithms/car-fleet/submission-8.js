class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // if a car arrives before the car ahead of it, it forms a fleet
        // sort in decreasing order by position
        // if a car does not reach the target before the top of the stack: we add it to the stack
        // the number of fleets will be the length of the stack
        const stack = [];
        const cars = position.map((p, i) => [p, speed[i]]);
        cars.sort((a, b) => b[0] - a[0]);

        for (const [p, s] of cars) {
            // how to calc time it take to get to target?
            // (target - position) / speed
            // pos: 4, 2, 0
            // spd: 1, 2, 4
            // stk: 96, 49, 25
            if (stack.length > 0 && ((target - p) / s) <= stack.at(-1)) {
                continue;
            }
            stack.push((target - p) / s);
        }
        return stack.length;
    }
}
