class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        let numIslands = 0;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    dfs(r, c);
                    numIslands++;
                }
            }
        }
        return numIslands

        function dfs(r, c) {
            if (r >= ROWS || c >= COLS || r < 0 || c < 0 || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = "0";
            for (const [rd, cd] of directions) {
                dfs(r + rd, c + cd);
            }
        }
    }
}
