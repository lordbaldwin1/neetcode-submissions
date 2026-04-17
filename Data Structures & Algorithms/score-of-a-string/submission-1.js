class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        // "code"
        // c=99, o=111, d=100, e=101
        // score = |111 - 99| + |100 - 111| + |101 - 100|
        if (s.length <= 1) return 0;

        let score = 0;
        for (let i = 1; i < s.length; i++) {
            score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        }
        return score;
    }
}
