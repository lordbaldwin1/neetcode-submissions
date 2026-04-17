class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let s of strs) {
            const sortedS = s.split('').sort().join('');

            if (map[sortedS] === undefined) {
                map[sortedS] = [];
            }

            map[sortedS].push(s);
        }
        return Object.values(map);
    }
}
