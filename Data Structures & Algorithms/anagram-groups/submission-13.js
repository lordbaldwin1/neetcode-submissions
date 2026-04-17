class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (const s of strs) {
            let count = new Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            let key = count.join(',');

            if (res[key] === undefined) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}
