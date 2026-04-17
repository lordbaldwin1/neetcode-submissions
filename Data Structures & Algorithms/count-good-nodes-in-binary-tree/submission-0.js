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
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;
        function dfs(root, max) {
            if (!root) return;

            dfs(root.left, Math.max(max, root.val));
            dfs(root.right, Math.max(max, root.val));
            if (root.val >= max) count++;
            return;
        }

        dfs(root, root.val);
        return count;
    }
}
