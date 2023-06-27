namespace A {
  const allList = (nums: number[]): number[][] => {
    const resArr: number[][] = [];
    nums.sort((a, b) => a - b);
    const usedArr = new Array(nums.length).fill(false);
    const blockTracking = (tempArr: number[]) => {
      if (tempArr.length === nums.length) {
        resArr.push(tempArr.slice());
        return;
      }

      for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && usedArr[i - 1] === false) {
          continue;
        }
        if (usedArr[i] === false) {
          tempArr.push(nums[i]);
          usedArr[i] = true;
          blockTracking(tempArr);
          usedArr[i] = false;
          tempArr.pop();
        }
      }
    };
    blockTracking([]);
    console.log(resArr);
    return resArr;
  };
  allList([1, 2, 3]);
}
