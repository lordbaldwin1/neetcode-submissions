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

        // sort them, if they are equal: true else false
        // sorting is nlogn
        return s.split('').sort().join(',') === t.split('').sort().join(',');
        // 
    }
}
