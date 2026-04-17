class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        let countS = {};
        let countT = {};

        for (let i = 0; i < s.length; i++) {
            if (countS[s[i]] === undefined) {
                countS[s[i]] = 1;
            } else {
                countS[s[i]] += 1;
            }

            if (countT[t[i]] === undefined) {
                countT[t[i]] = 1;
            } else {
                countT[t[i]] += 1;
            }
        }

        for (const key of Object.keys(countS)) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }
        return true;
    }
}
