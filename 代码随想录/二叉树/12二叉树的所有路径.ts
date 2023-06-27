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

  /** 叶子结点有几个,就有几条路径 */
  const allRoad = (node: TreeNode | null): string[] => {
    if (node === null) return [];

    let helpTree: TreeNode[] = [];
    let routeArr: string[] = [];
    let result: string[] = [];
    helpTree.push(node);
    routeArr.push(String(node.val));

    while (helpTree.length > 0) {
      let cur: TreeNode = helpTree.shift()!;
      let route: string = routeArr.shift()!;

      if (cur.left === null && cur.right === null) {
        result.push(route);
      }

      if (cur.left !== null) {
        helpTree.push(cur.left);
        routeArr.push(route + "->" + cur.left.val);
      }

      if (cur.right !== null) {
        helpTree.push(cur.right);
        routeArr.push(route + "->" + cur.right.val);
      }
    }
    return result;
  };
}
