class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // loop through the entire array
        // 
        let map = {};

        strs.forEach((str) => {
            let sortedStr = str.split('').sort().join(',');
            if (map[sortedStr] === undefined) {
                map[sortedStr] = [];
            }

            map[sortedStr].push(str);
        });

        return Object.values(map);
    }
}
