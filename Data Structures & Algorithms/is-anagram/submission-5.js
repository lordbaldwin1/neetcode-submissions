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
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1; 
        }

        for (const s in countS) {
            if (countS[s] !== countT[s]) {
                return false;
            }
        }
        return true;
    }
}
