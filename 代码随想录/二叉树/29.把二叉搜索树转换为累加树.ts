namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  /** 将二叉搜索树转换为累加树，给出二叉搜索树的节点，该树的节点各不相同，转换为累加树，使每个节点node的新值等于原树中大于或等于node.val的值之和 */

  const transTree = (root: TreeNode | null): TreeNode | null => {
    let sum: number = 0;
    if (root === null) return null;
    const recur = (root: TreeNode | null) => {
      if (root === null) return null;

      recur(root.right);
      sum += root.val;
      root.val = sum;
      recur(root.left);
      return root;
    };
    return recur(root);
  };
}
