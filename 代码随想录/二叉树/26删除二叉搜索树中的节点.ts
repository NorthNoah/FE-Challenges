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

  /** 删除二叉搜索树中的节点；给定一个二叉搜索树中的根节点root和一个值key，删除二叉搜索树中的key对应的节点，并保证二叉搜索树中的性质不变 */
  const cancelTree = (root: TreeNode | null, key: number): TreeNode | null => {
    function removeTargetNode(root: TreeNode): TreeNode | null {
      if (root.left === null && root.right === null) return null;
      if (root.right === null) return root.left;
      if (root.left === null) return root.right;
      let curNode: TreeNode | null = root.right;
      while (curNode.left !== null) {
        curNode = curNode.left;
      }
      curNode.left = root.left;
      return root.right;
    }
    let preNode: TreeNode | null = null,
      curNode: TreeNode | null = root;
    while (curNode !== null) {
      if (curNode.val === key) break;
      preNode = curNode;
      if (curNode.val > key) {
        curNode = curNode.left;
      } else {
        curNode = curNode.right;
      }
    }
    if (curNode === null) return root;
    if (preNode === null) {
      // 删除头节点
      return removeTargetNode(curNode);
    }
    if (preNode.val > key) {
      preNode.left = removeTargetNode(curNode);
    } else {
      preNode.right = removeTargetNode(curNode);
    }
    return root;
  };
}
