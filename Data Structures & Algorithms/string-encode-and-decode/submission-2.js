class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return '';
        }

        const eStrs = [];
        for (let s of strs) {
            eStrs.push(s.length + '#' + s);
        }

        return eStrs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) {
            return [];
        }

        let i = 0;
        let j = 0;
        let result = [];
        while (i < str.length) {
            j = i;
            while (str[j] !== '#') {
                j++;
            }

            let subStringLength = parseInt(str.substring(i, j));
            let start = j + 1;
            let end = start + subStringLength;
            result.push(str.substring(start, end));
            i = end;
        }   
        return result;
    }
}
