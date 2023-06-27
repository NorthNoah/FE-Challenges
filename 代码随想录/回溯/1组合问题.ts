namespace A {
  function combine(n: number, k: number): number[][] {
    let resArr: number[][] = [];
    function backTracking(
      n: number,
      k: number,
      startIndex: number,
      tempArr: number[]
    ): void {
      if (tempArr.length === k) {
        resArr.push(tempArr.slice());
        return;
      }
      for (
        let i = startIndex;
        i <= n - k + 1 + tempArr.length /** 剪枝操作 */;
        i++
      ) {
        tempArr.push(i);
        backTracking(n, k, i + 1, tempArr);
        tempArr.pop();
      }
    }
    backTracking(n, k, 1, []);
    return resArr;
  }
}
