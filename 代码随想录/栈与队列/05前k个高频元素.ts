namespace A {
  // 首先对数组中元素出现了多少次用map结构表示出来
  // 然后对这些元素进行一个从大到小的排序
  // 最后取出前k个元素
  const frontK = (num: number[], mark: number): number[] => {
    const countMap: Map<number, number> = new Map();
    for (let item of num) {
      countMap.set(item, (countMap.get(item) || 0) + 1);
    }
    console.log(
      [...countMap.entries()]
        .sort((a, b) => {
          return b[1] - a[1];
        })
        .slice(0, mark)
        .map((i) => i[0])
    );
    return [...countMap.entries()]
      .sort((a, b) => {
        return b[1] - a[1];
      })
      .slice(0, mark)
      .map((i) => i[0]);
  };
  frontK([1, 1, 1, 2, 2, 3], 2);
}
