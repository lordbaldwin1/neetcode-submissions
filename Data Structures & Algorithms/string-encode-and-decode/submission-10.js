class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += s.length + "#" + s;
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

        // 4#neet4#code4#love3#you
        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const strLen = Number(str.slice(i, j));
            i = j + strLen + 1;
            const subStr = str.slice(j + 1, i);
            res.push(subStr);
        }
        return res;
    }
}
