class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // we grow each iteration
        // we shrink from left when we find s[l] === s[r]
        let l = 0;
        let res = 0;
        const chars = new Set();

        for (let r = 0; r < s.length; r++) {
            while (chars.has(s[r])) {
                chars.delete(s[l]);
                l++;
            }
            chars.add(s[r]);
            res = Math.max(res, chars.size);
        }
        return res;
    }
}
