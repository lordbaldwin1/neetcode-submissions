class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let res = 0;
        const charSet = new Set();

        for (let r = 0; r < s.length; r++) {
            while (charSet.has(s[r])) { // "abcb"
                charSet.delete(s[l]);
                l++;
            }

            const windowLength = r - l + 1;
            charSet.add(s[r]);
            res = Math.max(res, windowLength);
        }
        return res;
    }
}
