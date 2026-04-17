class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (const s of strs) {
            let count = new Array(26).fill(0);
            for (const c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(',');

            if (map[key] === undefined) {
                map[key] = [];
            }

            map[key].push(s);
        }
        return Object.values(map);
    }
}
