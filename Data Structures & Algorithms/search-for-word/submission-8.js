class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        // loops through each cell, if we find the first char, dfs to check if it is the word
        // dfs will search each direction
        // we will keep track of the path in a set so we don't count duplicates

        const ROWS = board.length;
        const COLS = board[0].length;
        const path = new Set();

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
        function dfs(r, c, i) {
            if (i === word.length) {
                return true;
            }

            const key = `${r},${c}`;
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                word[i] !== board[r][c] ||
                path.has(key)
            ) {
                return false;
            }

            path.add(key);
            const res = 
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1);
            path.delete(key);
            return res;
        }
    }
}
