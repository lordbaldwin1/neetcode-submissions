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
        
        // make an array of 26, get the ascii value for each char
        // and then increment the index for that value
        // finally, join that array into a string, make the comparison

        const sArr = new Array(26).fill(0);
        const tArr = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            sArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            tArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        return sArr.join('') === tArr.join('')
    }
}
