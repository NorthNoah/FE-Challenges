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

  // 前序遍历的迭代
  function frontTraver(node: TreeNode | null): number[] {
    if (node === null) return [];
    let helpStack: TreeNode[] = [];
    let curNode: TreeNode = node;
    let res: number[] = [];
    helpStack.push(curNode);

    while (helpStack.length > 0) {
      curNode = helpStack.pop()!;
      res.push(curNode.val);
      if (curNode.left !== null) helpStack.push(curNode.left);
      if (curNode.right !== null) helpStack.push(curNode.right);
    }
    return res;
  }

  // 中序遍历的迭代(左中右)
  // function middle(node: TreeNode | null): number[] {
  //   if (node === null) return [];
  //   let helpStack: TreeNode[] = [];
  //   let res: number[] = [];
  //   let cur: TreeNode | null = node;

  //   while (cur !== null && helpStack.length > 0) {
  //     if (cur !== null) {
  //       helpStack.push(cur);
  //       cur = cur.left;
  //     } else {
  //       cur = helpStack.pop()!;
  //       res.push(cur.val);
  //       cur = cur.right;
  //     }
  //   }
  //   return res;
  // }
}
