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

  function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length === 0) return null;
    const rootVal: number = postorder.pop()!; /** 后序数组最后一个节点 */
    const rootValIndex: number = inorder.indexOf(rootVal);
    const rootNode: TreeNode = new TreeNode(rootVal);
    rootNode.left = buildTree(
      inorder.slice(0, rootValIndex),
      postorder.slice(0, rootValIndex)
    );
    rootNode.right = buildTree(
      inorder.slice(rootValIndex + 1),
      postorder.slice(rootValIndex)
    );
    return rootNode;
  }
}
