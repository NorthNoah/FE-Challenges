namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  /**给定一个二叉树，寻找该树中两个指定节点的最近公共祖先， 一个节点的也可以是它自己的祖先 */
  /** 所有节点的值都是唯一的，p、q为不同节点且均存在于给定的二叉树中 */
  const findFather = (
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
  ): TreeNode | null => {
    /** 后序遍历
     * 如果两个节点位于同一层级，则它们的祖先节点为他两的根节点；
     * 如果不位于同一层级但在同一边，则祖先节点为上面的节点；
     * 如果不位于同一层级且分别在两边，则祖先节点为上面节点的根节点 */
    if (root === null || root === p || root === q) return root;
    const left = findFather(root.left, p, q);
    const right = findFather(root.right, p, q);
    if (left !== null && right !== null) return root;
    if (left !== null) return left;
    if (right !== null) return right;
    return null;
  };
}
