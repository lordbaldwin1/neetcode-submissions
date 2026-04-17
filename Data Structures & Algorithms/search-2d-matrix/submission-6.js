class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;
        while (top <= bot) {
            const row = Math.floor((top + bot) / 2);
            if (matrix[row][COLS - 1] < target) {
                top = row + 1;
            } else if (matrix[row][0] > target) {
                bot = row - 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }

        let l = 0;
        let r = COLS - 1;
        const row = Math.floor((top + bot) / 2);

        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (matrix[row][mid] < target) {
                l = mid + 1;
            } else if (matrix[row][mid] > target) {
                r = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
