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

  /** 在树的最后一行找到最左边的值 */
  const findLeftVal = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let helpTree: TreeNode[] = [];
    helpTree.push(root);
    let val: number = 0;

    while (helpTree.length > 0) {
      val = helpTree[0].val; /** 最后一行的第一个 */
      let length = helpTree.length;
      for (let i = 0; i < length; i++) {
        let cur: TreeNode = helpTree.shift()!;
        if (cur.left !== null) {
          helpTree.push(cur.left);
        }
        if (cur.right !== null) {
          helpTree.push(cur.right);
        }
      }
    }
    return val;
  };
}
