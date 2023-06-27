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

  const searchTree = (root: TreeNode | null, val: number): TreeNode | null => {
    if (root === null) return null;

    let helpTree: TreeNode[] = [];
    helpTree.push(root);

    while (helpTree.length > 0) {
      let cur: TreeNode = helpTree.shift()!;
      if (cur.val === val) {
        return cur;
      }
      if (cur.left !== null) {
        helpTree.push(cur.left);
      }
      if (cur.right !== null) {
        helpTree.push(cur.right);
      }
    }
    return null;
  };
}
