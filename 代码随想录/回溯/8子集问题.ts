namespace A {
  /** 给定一组不含重复元素的整数数组nums，返回该数组所有可能的子集，且子集不包含重复的子集 */
  const childQues = (nums: number[]): number[][] => {
    const resArr: number[][] = [];

    const blockTracking = (tempArr: number[], startIndex: number) => {
      resArr.push(tempArr.slice());
      for (let i = startIndex; i < nums.length; i++) {
        tempArr.push(nums[i]);
        blockTracking(tempArr, i + 1);
        tempArr.pop();
      }
    };

    blockTracking([], 0);
    console.log(resArr);
    return resArr;
  };
  childQues([1, 2, 2]);
}
