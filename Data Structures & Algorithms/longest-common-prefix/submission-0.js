class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        // test each prefix of first string with all of rest
        if (strs.length === 0) return "";
        let res = "";

        for (let i = 0; i < strs[0].length; i++) {
            const pre = strs[0].slice(0, i + 1);
            let flag = true;
            for (let j = 1; j < strs.length; j++) {
                if (!strs[j].startsWith(pre)) {
                    flag = false;
                }
            }
            if (flag) res += strs[0][i];
        }
        return res;
    }
}
