namespace A {
  const windowMax = (num: number[], mark: number): number[] => {
    const findMax = (num: number[]): number => {
      let max: number = num[0];
      //   n
      for (let i = 0; i < num.length; i++) {
        let cur = num[i];
        max = cur > max ? cur : max;
      }
      return max;
    };
    let maxNum: number[] = []; // 返回结果
    let helpStack: number[] = []; // 窗口
    for (let i = 0; i < num.length; i++) {
      helpStack.push(num[i]);
      if (helpStack.length === mark) {
        maxNum.push(findMax(helpStack));
        helpStack.shift();
      }
    }
    console.log(maxNum);
    return maxNum;
  };
  windowMax([1, 3, -1, -3, 5, 3, 6, 7], 3);
}
