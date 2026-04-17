class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l = 0;
        let r = s.length - 1;
        while (l < r) {
            if (s[l] !== s[r]) {
                const isRightValid = this.isPalindrome(s, l + 1, r);
                const isLeftValid = this.isPalindrome(s, l, r - 1);
                return isRightValid || isLeftValid;
            }
            l++;
            r--;
        }
        return true;
    }

    isPalindrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
}
