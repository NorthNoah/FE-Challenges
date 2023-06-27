namespace A {
  /**全排列 主要难点在于递归的时候需要去重 */
  const allList = (nums: number[]): number[][] => {
    let resArr: number[][] = [];
    let hasUse: Set<number> = new Set();

    const blockTracking = (tempArr: number[]) => {
      if (tempArr.length === nums.length) {
        resArr.push(tempArr.slice());
        return;
      }
      for (let i = 0; i < nums.length; i++) {
        if (hasUse.has(nums[i])) {
          continue;
        }
        tempArr.push(nums[i]);
        hasUse.add(nums[i]);
        blockTracking(tempArr);
        tempArr.pop();
        hasUse.delete(nums[i]);
      }
    };
    blockTracking([]);
    console.log(resArr);
    return resArr;
  };
  allList([1, 2, 3]);
}
