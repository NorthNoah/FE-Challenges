namespace A {
  class TreeNode {
    public val: number;
    public left: TreeNode | null;
    public right: TreeNode | null;

    constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  const maxTree = (arr: number[]): TreeNode | null => {
    const findMax = (arr: number[]): number => {
      let max: number = arr[0];
      arr.forEach((item) => {
        max = item > max ? item : max;
      });
      return max;
    };

    let max: number = findMax(arr); /**找出最大值作为根节点 */
    let maxIndex: number = arr.indexOf(max); /**找出最大值的下标 */
    let rootNode: TreeNode = new TreeNode(max);

    rootNode.left = maxTree(arr.slice(0, maxIndex));
    rootNode.right = maxTree(arr.slice(maxIndex + 1));

    return rootNode;
  };
}
