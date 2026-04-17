class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const res = [];
        if (digits.length === 0) return res;
        const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };

        dfs(0, "");
        return res;

        function dfs(i, cur) {
            if (cur.length === digits.length) {
                res.push(cur);
                return;
            }

            for (const c of digitToChar[digits[i]]) {
                dfs(i + 1, cur + c);
            }
        }
    }
}
