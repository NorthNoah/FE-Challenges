namespace A {
  class TreeNode {
    public left: TreeNode | null;
    public right: TreeNode | null;
    public val: number;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

  /**给你一颗所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值 */
  const findMin = (root: TreeNode | null): number => {
    if (root === null) return 0;
    /**求绝对值 */
    const findSure = (val1: number, val2: number): number => {
      return val1 > val2 ? val1 - val2 : val2 - val1;
    };

    let helpNumber: number[] = [];
    let result: number = 0;
    let compi = Infinity;
    /**采用中序遍历获取每个节点,后面每获取一个新的就比较这两个的差值，再赋给一个number数据的变量*/
    const isValid = (root: TreeNode | null, helpNumber: number[]) => {
      if (root === null) return 0;
      isValid(root.left, helpNumber);
      helpNumber.push(root.val);
      if (helpNumber.length === 2) {
        let one = helpNumber.shift();
        let two = helpNumber.shift();
        result = findSure(one!, two!);
        result = result < compi ? result : compi;
        compi = result;
        helpNumber.push(two!);
        console.log(result);
      }
      isValid(root.right, helpNumber);
      return result;
    };
    return isValid(root, helpNumber);
  };
}
