/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function dfs(node) {
            if (!node) return [true, Infinity, -Infinity]; // validity, left max, right min

            const [leftValid, leftMin, leftMax] = dfs(node.left);
            const [rightValid, rightMin, rightMax] = dfs(node.right);

            const isValid =
                leftValid &&
                rightValid &&
                node.val > leftMax &&
                node.val < rightMin;

            const currentMin = Math.min(node.val, leftMin, rightMin);
            const currentMax = Math.max(node.val, leftMax, rightMax);

            return [isValid, currentMin, currentMax];
        }

        const res = dfs(root);
        return res[0];
    }
}
