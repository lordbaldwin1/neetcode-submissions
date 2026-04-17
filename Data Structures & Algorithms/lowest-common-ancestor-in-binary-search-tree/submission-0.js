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
        const queue = new Queue([root]);
        const small = p.val < q.val ? p : q;
        const large = p.val > q.val ? p : q;

        while (queue.size() > 0) {
            const queueSize = queue.size();
            for (let i = 0; i < queueSize; i++) {
                const node = queue.pop();
                if (!node) continue;
                if (small.val <= node.val && large.val >= node.val) return node;
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
}
