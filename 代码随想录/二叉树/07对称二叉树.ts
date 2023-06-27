namespace A {
  /**给你一颗二叉树，检查它是否是对称的 */
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

  /** 递归版本 */
  /** 左节点为空，右节点不为空，不对称，return false；左不为空，右为空，return false；左右都为空，对称，return true ；左右数值不相等，return false*/
  const checkTree = (node: TreeNode | null): boolean => {
    if (node === null) return false;
    function recur(node1: TreeNode | null, node2: TreeNode | null): boolean {
      if (node1 === null && node2 === null) return true;
      if (node2 === null || node2 === null) return false;
      if (node1!.val !== node2.val) return false;
      let isSym1: boolean = recur(node1!.left, node2.right);
      let isSym2: boolean = recur(node1!.right, node2.left);
      return isSym1 && isSym2;
    }
    if (node === null) return true;
    return recur(node.left, node.right);
  };

  /** 迭代版本 */
  const isCheckTree = (node: TreeNode | null): boolean => {
    let node1: TreeNode | null;
    let node2: TreeNode | null;

    let helpQueue: TreeNode[] = [];
    if (node === null) {
      return false;
    }
    helpQueue.push(node.left!);
    helpQueue.push(node.right!);

    while (helpQueue.length > 0) {
      node1 = helpQueue.shift()!;
      node2 = helpQueue.shift()!;

      if (node1 === null && node2 === null) return true;
      if (node1 === null || node2 === null) return false;
      if (node1.val !== node2.val) return false;

      helpQueue.push(node1.left!);
      helpQueue.push(node2.right!);
      helpQueue.push(node1.right!);
      helpQueue.push(node2.left!);
    }

    return true;
  };
}
