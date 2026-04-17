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
        if (!root) return [];
        const queue = new Queue([[root, 0]]);
        const res = [[root.val]];

        while (queue.size() > 0) {
            const qSize = queue.size();
            for (let i = 0; i < qSize; i++) {
                const [node, level] = queue.pop();
                if (!node) continue;

                if (node.left) {
                    if (!res[level + 1]) res[level + 1] = [];
                    res[level + 1].push(node.left.val);
                    queue.push([node.left, level + 1]);
                }
                if (node.right) {
                    if (!res[level + 1]) res[level + 1] = [];
                    res[level + 1].push(node.right.val);
                    queue.push([node.right, level + 1]);
                }
            }
        }
        return res;
    }
}
