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
        for (const s of strs) {
            const sortedS = s.split('').sort().join(',');

            if (!res[sortedS]) {
                res[sortedS] = [];
            }

            res[sortedS].push(s);
        }

        return Object.values(res);
    }
}
