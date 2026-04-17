class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // make count array, increment indices for chars in strings
        // join resulting array and thats the key, if no key, make empty
        // push string to that key
        const map = {};

        for (let s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(' ');

            if(map[key] === undefined) {
                map[key] = [];
            }
            map[key].push(s);
        }
        return Object.values(map);
    }
}
