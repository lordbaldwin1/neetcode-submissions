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
    // thoughts:
    // we know that if p <= root <= q, then that is their lowest common ancestor
    // can't we just BFS and check each node for the above until we find the correct ancestor?
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (!root) return null;

        const small = Math.min(p.val, q.val);
        const large = Math.max(p.val, q.val);
        if (root.val > large) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else if (root.val < small) {
            return this.lowestCommonAncestor(root.right, p, q);
        } {
            return root;
        }
    }
}
