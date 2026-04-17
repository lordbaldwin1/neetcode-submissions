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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const stack = [[p, q]];

        while (stack.length > 0) {
            const [pNode, qNode] = stack.pop();
            if (pNode && !qNode) return false;
            if (!pNode && qNode) return false;

            if (qNode && pNode) {
                if (pNode.val !== qNode.val) return false;
                stack.push([pNode.right, qNode.right]);
                stack.push([pNode.left, qNode.left]);
            }
        }

        return true;
    }
}
