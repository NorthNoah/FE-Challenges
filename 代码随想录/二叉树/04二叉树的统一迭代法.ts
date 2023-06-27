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

  /** 将访问的节点放入栈中，将要处理的节点也放入栈中但是要标记 */

  /** 前序遍历 */
  function frontTraver(node: TreeNode | null): number[] {
    if (node === null) return [];
    let helpStack: TreeNode[] = [];
    let curNode: TreeNode = node;
    let res: number[] = [];
    helpStack.push(curNode);

    while (helpStack.length > 0) {
      if (curNode !== null) {
        curNode = helpStack.pop()!;
        res.push(curNode.val);
        if (curNode.left !== null) helpStack.push(curNode.left);
        if (curNode.right !== null) helpStack.push(curNode.right);
      } else {
        curNode = helpStack.pop()!;
        res.push(curNode.val);
      }
    }
    return res;
  }

  /** 中序遍历 */
  function middleTraversal(root: TreeNode | null): number[] {
    let helperStack: (TreeNode | null)[] = [];
    let res: number[] = [];
    let curNode: TreeNode | null;
    if (root === null) return res;
    helperStack.push(root);
    while (helperStack.length > 0) {
      curNode = helperStack.pop()!;
      if (curNode !== null) {
        if (curNode.right !== null) helperStack.push(curNode.right);
        helperStack.push(curNode);
        helperStack.push(null);
        if (curNode.left !== null) helperStack.push(curNode.left);
      } else {
        curNode = helperStack.pop()!;
        res.push(curNode.val);
      }
    }
    return res;
  }
}
