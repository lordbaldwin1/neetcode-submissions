class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];

        let i = 0;
        while (i < str.length) {
            // 4#neet4#code3#luv1#u
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            
            const len = parseInt(str.substring(i, j));
            j++;
            i = j + len;
            const subStr = str.substring(j, i);
            res.push(subStr);
        }
        return res;
    }
}
