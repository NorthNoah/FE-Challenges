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

  /** 迭代版 */
  const searchHeight = (node: TreeNode | null): number => {
    if (node === null) return 1;
    let helpTree: TreeNode[] = [];
    helpTree.push(node);
    let mark: number = 1;
    while (helpTree.length > 0) {
      mark++;
      let length = helpTree.length;
      for (let i = 0; i < length; i++) {
        let node1: TreeNode | null = helpTree.shift()!;
        if (node1.left !== null) {
          helpTree.push(node1.left);
        }
        if (node1.right !== null) {
          helpTree.push(node1.right);
        }
      }
    }

    return mark;
  };

  /** 递归版 */
  const recursion = (node: TreeNode | null): number => {
    function recur(node: TreeNode | null, count: number) {
      if (node === null) {
        resMax = resMax > count ? resMax : count;
        return;
      }
      recur(node.left, count + 1);
      recur(node.right, count + 1);
    }
    let resMax: number = 0;
    let count: number = 0;
    recur(node, count);
    return resMax;
  };
}
