namespace A {
  /** 这道题难点在于在搜索的过程中就实现去重，做法是同一树层不可以重复选取相同的元素，实现这个功能要先对数组进行排序！！！ */
  const calSum = (candidates: number[], target: number): number[][] => {
    let resArr: number[][] = [];
    /** 二维数组去重 */
    const removeArr = (arr: number[][]): number[][] => {
      interface romanType {
        [key: string]: number[];
      }
      let obj: romanType = {};
      arr.map((item: number[], index: number) => {
        item.sort((a, b) => a - b);
        console.log(item.join(""));
        obj[item.join("")] = item;
      });
      return Object.values(obj);
    };
    candidates.sort((a, b) => a - b);
    const blockTracking = (
      tempArr: number[],
      sum: number,
      startIndex: number
    ) => {
      if (sum > target) return;
      if (sum === target) {
        resArr.push([...tempArr]);
        return;
      }

      for (let i = startIndex; i < candidates.length; i++) {
        /** i > startIndex；也可以使用used数组进行去重 */
        if (i > startIndex && candidates[i] === candidates[i - 1]) {
          continue;
        }
        tempArr.push(candidates[i]);
        sum += candidates[i];
        blockTracking(tempArr, sum, i + 1); /** 下一层递归的起始值 */
        sum -= candidates[i];
        tempArr.pop();
      }
    };
    blockTracking([], 0, 0);
    // resArr = removeArr(resArr);
    return resArr;
  };
  calSum(
    [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
    30
  );
}
