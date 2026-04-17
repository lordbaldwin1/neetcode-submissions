class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWSLENGTH = matrix.length;
        let COLSLENGTH = matrix[0].length;

        let lr = 0;
        let rr = ROWSLENGTH - 1;

        while (lr <= rr) {
            let mr = Math.floor((lr + rr) / 2);
            if (matrix[mr][COLSLENGTH - 1] < target) {
                lr = mr + 1;
            } else if (matrix[mr][0] > target) {
                rr = mr -1;
            } else {
                break;
            }
        }

        if (!(lr <= rr)) return false;

        let row = Math.floor((lr + rr) / 2);
        let l = 0;
        let r = COLSLENGTH - 1;
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
