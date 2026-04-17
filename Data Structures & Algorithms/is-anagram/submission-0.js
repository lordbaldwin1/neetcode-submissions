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

        // have to turn string into array
        let sarr = s.split("");
        let tarr = t.split("");

        // sort array so if is anagram, they will be same
        sarr.sort();
        tarr.sort();

        // convert back into string separated by nothing
        sarr = sarr.join('')
        tarr = tarr.join('')

        // return true if same, false if not
        return sarr === tarr;
    }
}
