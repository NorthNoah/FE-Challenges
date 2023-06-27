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

  /** 将有序数组转换为二叉搜索树，将一个按照升序排列的有序数组，转换为一颗高度平衡二叉搜索树，一个高度平衡二叉搜索树是指每个节点的左右两个子树的高度不超过1 */
  const changeTree = (nums: number[]): TreeNode | null => {
    // /** 先找中间节点 */
    // const middleRoot = (arr: number[]): TreeNode | null => {
    //   if (arr.length === 0) {
    //     return null;
    //   }
    //   let middle: number = Math.floor(arr.length / 2); /** 中间节点 */
    //   return new TreeNode(nums[middle]);
    // };

    // /**向中间节点插入节点 */
    // const LeftRecur = (nums: number[]) => {
    //   let left: number[] = nums.slice(
    //     0,
    //     Math.ceil(nums.length / 2)
    //   ); /** 左孩子 */
    //   let cur: TreeNode | null = middleRoot(nums); /** 中间节点 */
    //   if (cur !== null) {
    //     cur.left = middleRoot(left);
    //   }
    //   return cur;
    // };

    // const rightRecur = (nums: number[]) => {
    //   let right: number[] = nums.slice(
    //     Math.ceil(nums.length / 2)
    //   ); /** 右孩子 */
    //   let cur: TreeNode | null = middleRoot(nums);
    //   if (cur !== null) {
    //     cur.right = middleRoot(right);
    //   }
    //   return cur;
    // };

    // const left: TreeNode | null = LeftRecur(nums);
    // const right: TreeNode | null = rightRecur(nums);
    // if (left !== null && right !== null) left.right = right.right;
    // return left;

    function recur(
      nums: number[],
      left: number,
      right: number
    ): TreeNode | null {
      if (left > right) return null;
      let mid: number = Math.floor((left + right) / 2);
      const root: TreeNode = new TreeNode(nums[mid]);
      root.left = recur(nums, left, mid - 1);
      root.right = recur(nums, mid + 1, right);
      return root;
    }
    return recur(nums, 0, nums.length - 1);
  };
}
