namespace A {
  /** 复原IP地址，给定一个只包含数字的字符串，复原它并返回所有可能的IP地址格式，有效的IP地址正好有四个整数构成(每个整数位于0到255之间组成，且不能含有前导0) */
  const reIP = (str: string): string[] => {
    const judge = (str: string): boolean => {
      if (
        Number(str) > 255 ||
        Number(str) < 0 ||
        (str.length > 1 && str[0] === "0")
      ) {
        return false;
      } else {
        return true;
      }
    };

    let resArr: string[] = [];
    const blockTracking = (tempArr: string[], startIndex: number) => {
      if (tempArr.length === 4 && tempArr.join("").length === str.length) {
        resArr.push(tempArr.join("."));
      }

      for (let i = startIndex; i < str.length; i++) {
        if (!judge(str.substring(startIndex, i + 1))) {
          continue;
        }
        tempArr.push(str.slice(startIndex, i + 1));
        blockTracking(tempArr, i + 1);
        tempArr.pop();
      }
    };
    blockTracking([], 0);
    return resArr;
  };
  reIP("0000");
}
