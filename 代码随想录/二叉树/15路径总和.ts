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

  const reducePath = (root: TreeNode | null, targetSum: number): boolean => {
    if (root === null) return false;
    let helpTree: TreeNode[] = [];
    let sum: number[] = []; /** 记录每一步总和的数组 */
    sum.push(root.val);
    helpTree.push(root);

    while (helpTree.length > 0) {
      let cur: TreeNode = helpTree.shift()!;
      let val: number = sum.shift()!; /** 将前面的路径之和弹出来 */

      /** 当前节点为叶子节点 */
      if (cur.left === null && cur.right === null) {
        if (val === targetSum) return true;
      }

      if (cur.left !== null) {
        helpTree.push(cur.left);
        sum.push(val + cur.left.val);
      }

      if (cur.right !== null) {
        helpTree.push(cur.right);
        sum.push(val + cur.right.val);
      }
    }
    return false;
  };
}
