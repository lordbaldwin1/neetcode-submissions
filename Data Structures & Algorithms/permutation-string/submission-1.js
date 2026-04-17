class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) {
            return false;
        }

        const s1Freq = new Array(26).fill(0);
        const s2Freq = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Freq[s1.charCodeAt(i) - "a".charCodeAt(0)]++;
            s2Freq[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
        }

        let l = 0;
        let r = s1.length - 1;
        while (r < s2.length) {
            if (s2Freq.join(",") === s1Freq.join(",")) {
                return true;
            }

            s2Freq[s2.charCodeAt(l) - "a".charCodeAt(0)]--;
            l++;
            r++;

            if (r < s2.length) {
                s2Freq[s2.charCodeAt(r) - "a".charCodeAt(0)]++;
            }
        }
        return false;
    }
}
