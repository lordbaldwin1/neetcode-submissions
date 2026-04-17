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
        const count = [k, null];
        function dfs(root, count) {
            if (!root) return;

            dfs(root.left, count);
            count[0]--;
            if (count[0] === 0) {
                count[1] = root.val;
            }
            dfs(root.right, count);
        }
        dfs(root, count);
        return count[1];
    }
}
