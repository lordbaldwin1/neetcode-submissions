class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0);
        const cols = new Array(9).fill(0);
        const squares = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") continue;
                const val = board[r][c];
                const sKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;
                if (rows[r] & (1 << val) || cols[c] & (1 << val) || squares[sKey] & (1 << val)) {
                    return false;
                }
                
                rows[r] |= (1 << val);
                cols[c] |= (1 << val);
                squares[sKey] |= (1 << val);
            }
        }
        return true;
    }
}
