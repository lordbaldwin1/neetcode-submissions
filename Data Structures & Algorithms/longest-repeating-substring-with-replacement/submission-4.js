class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let res = 0;
        const count = {};

        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;

            // are remaining non-highest frequency elements too many to replace? (invalid window!)
            if (((r - l + 1) - Math.max(...Object.values(count))) > k) {
                count[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
