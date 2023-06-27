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

  /**求二叉搜索树的最近公共祖先 */
  function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null {
    if (root === null) return null;
    if (p === null || q === null) return root;
    if (root.val > p.val && root.val > q.val)
      return lowestCommonAncestor(root.left, p, q);
    if (root.val < p.val && root.val < q.val)
      return lowestCommonAncestor(root.right, p, q);
    return root;
  }
}
