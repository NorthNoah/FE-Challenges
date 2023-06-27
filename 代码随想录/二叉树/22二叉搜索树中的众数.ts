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

  /** 使用中序遍历 */
  const findMore = (root: TreeNode | null): number[] => {
    /**计算众数 */
    const findMoreNumber = (arr: number[]): number[] => {
      if (arr.length === 1) return [arr[0]];
      let res = {};
      let maxNum = 0; /** 计算次数 */
      let maxNumArr: number[] = []; /** 统计元素 */
      arr.forEach((item) => {
        res[item] ? (res[item] += 1) : (res[item] = 1);
        if (res[item] > maxNum) {
          maxNum = res[item];
        }
      });
      console.log(maxNum);
      Object.keys(res).forEach((item, index) => {
        if (res[item] === maxNum) maxNumArr.push(Number(item));
      });
      return maxNumArr;
    };
    if (root === null) return [0];
    let res: number[] = [];
    const resur = (root: TreeNode | null): number[] => {
      if (root === null) return [0];
      resur(root.left);
      res.push(root.val);
      resur(root.right);
      return res;
    };
    return findMoreNumber(resur(root));
  };
}
