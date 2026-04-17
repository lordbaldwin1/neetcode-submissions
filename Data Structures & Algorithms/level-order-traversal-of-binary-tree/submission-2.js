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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];

        function dfs(root, level) {
            if (!root) return;

            dfs(root.left, level + 1);
            dfs(root.right, level + 1);

            if (!res[level]) res[level] = [];
            res[level].push(root.val);

            return;
        }

        dfs(root, 0);

        return res;
    }
}
