namespace A {
  /** 子集问题PLUS，难点在于搜索的时候实现去重——所以要先对输入的数组进行排序 */
  const childQues = (nums: number[]): number[][] => {
    nums.sort((a, b): number => a - b);

    let resArr: number[][] = [];

    const blockTracking = (tempArr: number[], startIndex: number) => {
      resArr.push(tempArr.slice());
      for (let i = startIndex; i < nums.length; i++) {
        /** i > startIndex是关键 */
        if (i > startIndex && nums[i] === nums[i - 1]) {
          continue; /** 跳过重复的值 */
        }
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
