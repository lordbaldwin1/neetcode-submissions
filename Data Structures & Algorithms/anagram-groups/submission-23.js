class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // iterate through the input strs
        // hash map, sort input str, that is the key
        // push original unsorted str to that key
        // return values Object.values
        let map = {};

        for (const str of strs) {
            let sortedStr = str.split('').sort().join('');

            if (map[sortedStr] === undefined) {
                map[sortedStr] = [];
            }

            map[sortedStr].push(str);
        }
        return Object.values(map);
    }
}
