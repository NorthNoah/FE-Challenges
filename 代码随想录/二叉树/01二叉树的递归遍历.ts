namespace A {
  // 定义二叉树
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left?: TreeNode, right?: TreeNode) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  /**二叉树的递归遍历  */
  /** 前序遍历——中左右 */
  function frontReverse(node: TreeNode | null): number[] {
    const traval = (node: TreeNode | null, res: number[]) => {
      if (node === null) return;
      else {
        res.push(node.val);
        traval(node.left, res);
        traval(node.right, res);
      }
    };
    let res: number[] = [];
    traval(node, res);
    return res;
  }

  //   中序遍历——左中右
  function middleTraval(node: TreeNode | null): number[] {
    const traval = (node: TreeNode | null, res: number[]) => {
      if (node === null) return;
      traval(node.left, res);
      res.push(node.val);
      traval(node.right, res);
    };

    let res: number[] = [];
    traval(node, res);
    return res;
  }

  //   后序遍历——左右中
  function backTraval(node: TreeNode | null): number[] {
    const traval = (node: TreeNode | null, res: number[]) => {
      if (node === null) return;
      traval(node.left, res);
      traval(node.right, res);
      res.push(node.val);
    };
    let res: number[] = [];
    traval(node, res);
    return res;
  }
}
