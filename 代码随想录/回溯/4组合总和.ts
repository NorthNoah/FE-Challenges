namespace A {
  const calSum = (candidates: number[], target: number): number[][] => {
    let resArr: number[][] = [];

    const blockTracking = (
      tempArr: number[],
      sum: number,
      startIndex: number
    ) => {
      if (sum > target) return;
      if (sum === target) {
        resArr.push(tempArr.slice());
        return;
      }

      for (let i = startIndex; i < candidates.length; i++) {
        tempArr.push(candidates[i]);
        // console.log(tempArr);
        sum += candidates[i];
        blockTracking(tempArr, sum, i);
        sum -= candidates[i];
        tempArr.pop();
      }
    };

    blockTracking([], 0, 0);
    // console.log(resArr);
    return resArr;
  };
  calSum([2, 3, 6, 7], 7);
}
