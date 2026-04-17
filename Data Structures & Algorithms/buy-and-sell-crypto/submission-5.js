class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let res = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                const profit = prices[r] - prices[l];
                res = Math.max(res, profit);
            } else {
                l = r;
            }
            r++;
        }
        return res;
    }
}
