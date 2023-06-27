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

  /**
   * 这里以树一作为合并之后的树
   * @param root1
   * @param root2
   * @returns
   */
  const mergeTree = (root1: TreeNode, root2: TreeNode): TreeNode => {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    let helpTree1: (TreeNode | null)[] = [];
    helpTree1.push(root1);
    let helpTree2: (TreeNode | null)[] = [];
    helpTree2.push(root2);

    while (helpTree1.length > 0 && helpTree2.length > 0) {
      let cur1: TreeNode | null = helpTree1.shift()!;
      let cur2: TreeNode | null = helpTree2.shift()!;

      cur1.val += cur2.val;

      if (cur1.left !== null && cur2.left !== null) {
        helpTree1.push(cur1.left);
        helpTree2.push(cur2.left);
      } else if (cur1.left === null) {
        cur1.left = cur2.left;
      }
      if (cur1.right !== null && cur2.right !== null) {
        helpTree1.push(cur1.right);
        helpTree2.push(cur2.right);
      } else if (cur1.right === null) {
        cur1.right = cur2.right;
      }
    }
    return root1;
  };
}
