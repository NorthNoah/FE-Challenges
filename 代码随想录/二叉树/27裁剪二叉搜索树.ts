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

  /** 迭代法 */
  const fixTree = (
    root: TreeNode | null,
    L: number,
    R: number
  ): TreeNode | null => {
    if (root === null) return null;

    /** 先将根节点移到[L,R]范围内 */
    while (root !== null && (root.val < L || root.val > R)) {
      if (root.val < L) {
        root = root.right;
      } else if (root.val > R) {
        root = root.left;
      }
    }

    let cur: TreeNode | null = root;

    /** 现在root已经在[L,R]范围内，处理左孩子元素小于L的情况 */
    while (cur !== null) {
      while (cur.left !== null && cur.left.val < L) {
        cur.left = cur.left.right;
      }
      cur = cur.left;
    }

    cur = root;

    /** 现在root已经在[l,R]范围内，处理右孩子元素大于R的情况 */
    while (cur !== null) {
      while (cur.right !== null && cur.right.val > R) {
        cur.right = cur.right.left;
      }
      cur = cur.right;
    }
    return root;
  };
}
