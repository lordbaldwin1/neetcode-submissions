class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // map where key is sorted anagram, values are original strings
        let map = {};

        for (const s of strs) {
            const sortedS = s.split('').sort().join('');

            if (map[sortedS] === undefined) {
                map[sortedS] = [];
            }

            map[sortedS].push(s);
        }
        return Object.values(map);
    }
}
