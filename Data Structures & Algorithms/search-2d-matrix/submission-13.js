class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let top = 0;
        let bot = ROWS - 1;
        while (top <= bot) {
            let mid = Math.floor((bot + top) / 2);
            if (matrix[mid][0] > target) {
                bot = mid - 1;
            } else if (matrix[mid][COLS - 1] < target) {
                top = mid + 1;
            } else {
                break;
            }
        }

        if (!(top <= bot)) {
            return false;
        }

        let row = Math.floor((top + bot) / 2);
        let l = 0;
        let r = COLS - 1;
        while (l <= r) {
            let m = Math.floor((l + r) / 2);
            if (matrix[row][m] < target) {
                l = m + 1;
            } else if (matrix[row][m] > target) {
                r = m - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
