class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while (l <= r) {
            const midSpeed = Math.floor((l + r) / 2);

            let totalTime = 0;
            for (const p of piles) {
                const pileTime = Math.ceil(p / midSpeed);
                totalTime += pileTime;
            }

            if (totalTime <= h) {
                res = midSpeed;
                r = midSpeed - 1;
            } else {
                l = midSpeed + 1;
            }
        }
        return res;
    }
}
