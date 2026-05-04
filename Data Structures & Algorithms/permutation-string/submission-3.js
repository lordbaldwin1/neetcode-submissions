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
        
        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        const s1Key = s1Count.join();

        let l = 0;
        let r = s1.length - 1;
        while (r < s2.length) {
            const s2Key = s2Count.join();
            if (s1Key === s2Key) {
                return true;
            }

            s2Count[s2[l].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            l++;
            r++;
            if (r < s2.length) {
                s2Count[s2[r].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
        }
        return false;
    }
}
