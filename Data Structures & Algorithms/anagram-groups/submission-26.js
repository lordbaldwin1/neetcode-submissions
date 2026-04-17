class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};

        // iterate list
        // sort string
        // sorted string is key
        // sortedS : array of originals
        // return an array of the values of map lol!

        // okay but now char codes
        // iterate list
        // iterate chars, build array with char count?
        // join that array
        // that is key
        // charCountString : array of og strings
        for (const s of strs) {
            let charCount = new Array(26).fill(0);

            for (const c of s) {
                charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            if (!res[charCount.join(',')]) {
                res[charCount.join(',')] = [];
            }

            res[charCount.join(',')].push(s);
        }

        return Object.values(res);
    }
}
