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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;

        const tempL = root.left;
        root.left = root.right;
        root.right = tempL;

        this.invertTree(root.left);
        this.invertTree(root.right);

        return root;
    }
}
