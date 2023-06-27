namespace A {
  class TreeNode {
    public val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  /** 二叉搜索树的插入操作，将值插入二叉搜索树。返回插入后二叉搜索树的根节点 */
  const insertTree = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null) return new TreeNode(val);
    if (val > root.val) {
      root.left = insertTree(root.left, val);
    }
    if (val < root.val) {
      root.right = insertTree(root.right, val);
    }
    return root;
  };
}
