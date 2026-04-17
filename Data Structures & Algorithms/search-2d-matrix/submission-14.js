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
        let mid = 0;

        while (top <= bot) {
            mid = Math.floor((top + bot) / 2);

            if (matrix[mid][0] > target) {
                bot = mid - 1;
            } else if (matrix[mid][COLS - 1] < target) {
                top = mid + 1;
            } else {
                break;
            }
        }

        if (matrix[mid][0] > target && matrix[mid][COLS - 1] < target) {
            return false;
        }

        let l = 0;
        let r = COLS - 1;

        while (l <= r) {
            let m = Math.floor((l + r) / 2);

            if (matrix[mid][m] === target) {
                return true;
            } else if (matrix[mid][m] < target) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return false;
    }
}
