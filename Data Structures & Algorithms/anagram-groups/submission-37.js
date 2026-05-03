class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // store key -> array of anagrams
        // then, return entries of the map
        const res = {};
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const key = count.join();
            if (res[key] === undefined) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
