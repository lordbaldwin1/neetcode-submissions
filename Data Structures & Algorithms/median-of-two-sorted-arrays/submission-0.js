class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let a = nums1;
        let b = nums2;
        const total = a.length + b.length;
        const half = Math.floor(total / 2);

        if (a.length > b.length) {
            const temp = a;
            a = b;
            b = temp;
        }

        let l = 0;
        let r = a.length - 1;
        while (true) {
            const i = Math.floor((l + r) / 2); // a
            const j = half - i - 2; // b, -2 because both arrays are 0-indexed

            const aLeft = i >= 0 ? a[i] : Number.MIN_SAFE_INTEGER;
            const aRight = (i + 1) < a.length ? a[i + 1] : Number.MAX_SAFE_INTEGER;
            const bLeft = j >= 0 ? b[j] : Number.MIN_SAFE_INTEGER;
            const bRight = (j + 1) < b.length ? b[j + 1] : Number.MAX_SAFE_INTEGER;

            if (aLeft <= bRight && bLeft <= aRight) {
                if (total % 2) {
                    return Math.min(aRight, bRight);
                }
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
            } else if (aLeft > bRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
    }
}
