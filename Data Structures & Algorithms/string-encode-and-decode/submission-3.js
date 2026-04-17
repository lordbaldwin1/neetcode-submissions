class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let res = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++;
            }

            let stringLength = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + stringLength;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
