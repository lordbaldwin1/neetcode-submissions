class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};

        for (const s of strs) {
            let sortedS = s.split('').sort().join('');
            
            if (res[sortedS] === undefined) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }
}
