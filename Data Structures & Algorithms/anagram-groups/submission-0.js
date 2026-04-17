class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        // loops through each string
        for (let s of strs) {
            // new count array for each string
            const count = new Array(26).fill(0);
            // loops through each char in string
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            // makes count a string to be used at key
            const key = count.join(',');

            if(!map[key]) {
                map[key] = [];
            }
            map[key].push(s);
        }
        return Object.values(map);
    }
}
