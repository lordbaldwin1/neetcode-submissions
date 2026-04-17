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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const arr = [];

        function dfs(root) {
            if (!root) return;

            dfs(root.left);
            if (root) arr.push(root.val);
            dfs(root.right);
            return;
        }
        dfs(root);
        return arr[k-1];
    }
}
