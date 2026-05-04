class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let res = 0;

        for (let r = 1; r < prices.length; r++) {
            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l];
                res = Math.max(res, profit);
            } else {
                l = r;
            }
        }
        return res;
    }
}
