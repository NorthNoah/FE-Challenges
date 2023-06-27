namespace A {
  /** 给定一个整型数组，找到该数组的递增子序列 */
  const addChild = (nums: number[]): number[][] => {
    let resArr: number[][] = [];

    const blockTracking = (tempArr: number[], startIndex: number) => {
      if (tempArr.length >= 2) {
        resArr.push(tempArr.slice());
      }
      let uset: Set<number> = new Set();
      for (let i = startIndex; i < nums.length; i++) {
        if (nums[i] < tempArr[tempArr.length - 1] || uset.has(nums[i])) {
          continue;
        }
        uset.add(nums[i]);
        tempArr.push(nums[i]);
        blockTracking(tempArr, i + 1);
        tempArr.pop();
      }
    };
    blockTracking([], 0);
    console.log(resArr);
    return resArr;
  };
  addChild([4, 6, 7, 7]);
}
