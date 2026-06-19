class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const cur = arr[i];
            arr[i] = max;
            max = Math.max(max, cur);
        }

        return arr;
    }
}
