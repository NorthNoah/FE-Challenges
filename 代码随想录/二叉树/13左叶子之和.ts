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

  const sumLeftTree = (root: TreeNode | null): number => {
    if (root === null) return 0;

    let helpTree: TreeNode[] = [];
    helpTree.push(root);
    let sum: number = 0;

    while (helpTree.length > 0) {
      let cur: TreeNode = helpTree.shift()!;

      if (cur.left && cur.left.left === null && cur.left.right === null) {
        sum += cur.left.val;
      }
      if (cur.left !== null) {
        helpTree.push(cur.left);
      }
      if (cur.right !== null) {
        helpTree.push(cur.right);
      }
    }
    return sum;
  };
}
