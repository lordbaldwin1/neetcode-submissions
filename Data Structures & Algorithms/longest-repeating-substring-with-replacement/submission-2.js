class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let res = 0;
        let l = 0;
        
        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;
            const isInvalidWindow = ((r - l + 1) - Math.max(...Object.values(count))) > k;

            if (isInvalidWindow) {
                count[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
