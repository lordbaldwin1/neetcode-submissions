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

        const sCount = new Array(26).fill(0);
        const tCount = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            sCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            tCount[t[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        return sCount.join() === tCount.join();
    }
}
