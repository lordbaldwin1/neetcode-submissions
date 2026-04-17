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
    // if we were to do DFS, we would need to keep track of both the val and level
    // instead of left then right, we would do right then left
    // only add a val if no val has been added at that level

    // BFS: do normal BFS with a queue, only process the last node in our current level
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        const q = new Queue([root]);
        const res = [];

        while (!q.isEmpty()) {
            const level = [];
            const qSize = q.size();
            for (let i = 0; i < qSize; i++) {
                const node = q.pop();
                if (node) {
                    level.push(node.val);
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (level.length > 0) {
                res.push(level.at(-1));
            }
        }

        return res;
    }
}
