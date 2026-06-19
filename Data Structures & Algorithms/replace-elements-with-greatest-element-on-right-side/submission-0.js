class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            let maxRight = -1;
            for (let j = i + 1; j < arr.length; j++) {
                maxRight = Math.max(maxRight, arr[j]);
            }
            arr[i] = maxRight;
        }
        return arr;
    }
}
