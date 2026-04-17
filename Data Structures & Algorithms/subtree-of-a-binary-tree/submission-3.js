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
    // find the node in root that is the root of subroot
    // then check if they are the same tree
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true;

        if (!root) return false;

        const isSameTree = this.isSameTree(root, subRoot);
        if (isSameTree) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
    isSubtree2(root, subRoot) {
        const nodes = this.findNode(root, subRoot);
        let isSubtree = false;
        for (const node of nodes) {
            const res = this.isSameTree(node, subRoot);
            if (res === true) {
                isSubtree = true;
            }
        }
        return isSubtree;
    }

    findNode(root, subRoot) {
        const stack = [root];
        const nodes = [];

        while (stack.length > 0) {
            const node = stack.pop();

            if (!node) continue;
            if (node.val === subRoot.val) {
                nodes.push(node);
            }
            stack.push(node.right);
            stack.push(node.left);
        }
        return nodes;
    }

    isSameTree(root, subRoot) {
        if (!root && !subRoot) return true;

        if (root && subRoot && root.val === subRoot.val) {
            const left = this.isSameTree(root.left, subRoot.left);
            const right = this.isSameTree(root.right, subRoot.right);
            return left && right;
        } else {
            return false;
        }
    }
}
