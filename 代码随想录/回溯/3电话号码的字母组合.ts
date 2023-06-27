namespace A {
  function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    const strMap: { [index: string]: string[] } = {
      1: [],
      2: ["a", "b", "c"],
      3: ["d", "e", "f"],
      4: ["g", "h", "i"],
      5: ["j", "k", "l"],
      6: ["m", "n", "o"],
      7: ["p", "q", "r", "s"],
      8: ["t", "u", "v"],
      9: ["w", "x", "y", "z"],
    };
    const resArr: string[] = [];
    function backTracking(
      digits: string,
      curIndex: number,
      route: string[]
    ): void {
      if (curIndex === digits.length) {
        resArr.push(route.join(""));
        return;
      }
      let tempArr: string[] = strMap[digits[curIndex]];
      for (let i = 0, length = tempArr.length; i < length; i++) {
        route.push(tempArr[i]);
        backTracking(digits, curIndex + 1, route);
        route.pop();
      }
    }
    backTracking(digits, 0, []);
    return resArr;
  }
}
