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
        const que = new Queue([[p, q]]);

        //bfs: loop and pop nodes from queue, compare, add their children to queue, then continue
        while (que.size() > 0) {
            const size = que.size();
            for (let i = 0; i < size; i++) {
                const [pNode, qNode] = que.pop();
                if (!pNode && !qNode) continue;
                if (!pNode || !qNode || pNode.val !== qNode.val) return false;
                que.push([pNode.left, qNode.left]);
                que.push([pNode.right, qNode.right]);
            }
        }
        return true;
    }
}
