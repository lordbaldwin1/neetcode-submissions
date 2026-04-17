class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const path = new Set();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) return true;
            }
        }
        return false;
        // our goal is to run DFS on ever element until we find
        // the answer, otherwise return false
        function dfs(r, c, i) {
            if (i === word.length) {
                return true;
            }

            if (r >= ROWS
                || c >= COLS
                || r < 0
                || c < 0
                || path.has(`${r},${c}`)
                || word[i] !== board[r][c]) {
                return false;
            }

            path.add(`${r},${c}`);
            const res = 
                dfs(r + 1, c, i + 1)
                || dfs(r - 1, c, i + 1)
                || dfs(r, c + 1, i + 1)
                || dfs(r, c - 1, i + 1);
            path.delete(`${r},${c}`);
            return res;
        }
    }
}
