class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // make map of s, key = sorted string, value(s) = original strings
        let map = {};

        for (let s of strs) {
            let sortedStr = s.split('').sort().join('');

            if (!map[sortedStr]) {
                map[sortedStr] = [];
            }

            map[sortedStr].push(s);
        }
        return Object.values(map);
    }
}
