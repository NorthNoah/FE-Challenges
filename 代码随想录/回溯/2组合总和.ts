namespace A {
  /**找出所有相加之和为n的k个数的组合。组合中只允许含有1-9的正整数，并且每种组合中不存在重复的数字 */
  const calNum = (k: number, n: number): number[][] => {
    let resArr: number[][] = [];
    const recur = (
      k: number,
      n: number,
      sum: number,
      startIndex: number,
      tempArr: number[]
    ) => {
      if (sum > n) return;
      if (tempArr.length === k) {
        if (sum === n) {
          resArr.push([...tempArr]);
        }
        return;
      }

      for (let i = startIndex; i < 10; i++) {
        tempArr.push(i);
        sum += i;
        recur(k, n, sum, i + 1, tempArr);
        sum -= i;
        tempArr.pop();
      }
    };
    recur(k, n, 0, 1, []);
    return resArr;
  };
}
