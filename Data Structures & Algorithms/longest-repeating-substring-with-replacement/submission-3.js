class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // what are we looking for our window to achieve?
            // create a window with the largest substring
            // where the elements to be replaced are <= k
        // when do we shift our window? (invalid window)
            // If there are too many elements to replace
            // windowLength - most occuring element is > k
        
        let l = 0;
        let res = 0;
        const count = {};

        for (let r = 0; r < s.length; r++) {
            count[s[r]] = (count[s[r]] || 0) + 1;

            const isWindowInvalid = ((r - l + 1) - Math.max(...Object.values(count))) > k;
            if (isWindowInvalid) {
                count[s[l]]--;
                l++;
            }

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
