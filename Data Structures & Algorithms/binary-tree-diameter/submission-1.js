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
    constructor() {
        this.diameter = 0;
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if (!root) return 0;

        this.dfs(root);
        return this.diameter;
    }

    dfs(root) {
        if (!root) return 0;

        const leftHeight = this.dfs(root.left);
        const rightHeight = this.dfs(root.right);
        this.diameter = Math.max(this.diameter, leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }
}
