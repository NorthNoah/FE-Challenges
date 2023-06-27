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
  function isValidBST(root: TreeNode | null): boolean {
    let maxVal = -Infinity;
    function inorderTraverse(root: TreeNode | null): boolean {
      if (root === null) return true;
      let leftValid: boolean = inorderTraverse(root.left);
      if (!leftValid) return false;
      if (maxVal < root.val) {
        maxVal = root.val;
      } else {
        return false;
      }
      let rightValid: boolean = inorderTraverse(root.right);
      return leftValid && rightValid;
    }
    return inorderTraverse(root);
  }
}
