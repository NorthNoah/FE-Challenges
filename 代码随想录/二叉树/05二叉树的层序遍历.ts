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

  function everyTrerve(node: TreeNode | null): number[][] {
    if (node === null) return [];
    let queue: TreeNode[] = [];
    queue.push(node); // 先将首节点放进去
    let res: number[][] = [];
    while (queue.length > 0) {
      // 第一次，头结点被弹了出来，，并将头结点的值赋给shift，然后将头结点的左节点与右节点赋给队列；
      // 第二次，左节点的值赋给shift，如果不为空，将左节点的左节点和右节点赋给shift，然后右节点也是同理，依次循环往复
      let shift: number[] = [];
      let length = queue.length;
      for (let i = 0; i < length; i++) {
        let node = queue.shift()!;
        shift.push(node.val);
        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
      }
      res.push(shift);
    }
    return res;
  }
}
