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
    maxDepth(root) {
        if (!root) return 0;

        let level = 0;
        const stack = [[root, 1]];
        while (stack.length > 0) {
            const [node, nodeLevel] = stack.pop();
            if (node.right) stack.push([node.right, nodeLevel + 1]);
            if (node.left) stack.push([node.left, nodeLevel + 1]);
            level = Math.max(nodeLevel, level);
        }
        return level;
    }
}
