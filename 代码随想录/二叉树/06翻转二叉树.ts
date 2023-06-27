namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right == undefined ? null : right;
    }
  }

  //   每一层当作一个栈push出来就可以了
  function reverseTree(node: TreeNode | null): TreeNode | null {
    if (node === null) return null;
    let helpStack: TreeNode[] = [];
    helpStack.push(node);

    while (helpStack.length > 0) {
      let length = helpStack.length;
      for (let i = 0; i < length; i++) {
        let cur = helpStack.pop()!;
        let temp: TreeNode | null = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        if (cur.left !== null) {
          helpStack.push(cur.left);
        }
        if (cur.right !== null) {
          helpStack.push(cur.right);
        }
      }
    }
    return node;
  }
}
