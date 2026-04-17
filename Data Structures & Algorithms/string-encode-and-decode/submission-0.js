class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return '';
        }
        let encodedStrs = [];

        for (let s of strs) {
            encodedStrs.push(s.length + '#' + s);
        }

        let result = encodedStrs.join('');
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // .substring(0, 3) 0 inclusive, 3 up to but excluded
        if (str.length === 0) {
            return [];
        }
        let result = [];
        let i = 0;
        
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#') {
                j++
            }

            let slen = parseInt(str.substring(i, j));
            let start = j + 1;
            let end = start + slen;
            result.push(str.substring(start, end));

            i = end;
        }
        return result;
    }
}
