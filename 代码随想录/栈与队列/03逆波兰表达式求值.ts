namespace A {
  const lastFindString = (str: string[]): number => {
    let helpStack: number[] = [];
    let num: number = 0;
    for (const item of str) {
      switch (item) {
        case "+":
          num = helpStack.pop()! + helpStack.pop()!;
          console.log(num);
          helpStack.push(num);
          break;
        case "-":
          const temp = helpStack.pop()!;
          num = helpStack.pop()! - temp;
          helpStack.push(num);
          break;
        case " * ":
          num = helpStack.pop()! * helpStack.pop()!;
          helpStack.push(num);
          break;
        case "/":
          const tempChu = helpStack.pop()!;
          num = helpStack.pop()! / tempChu;
          helpStack.push(num);
          break;
        default:
          helpStack.push(Number(item));
          break;
      }
    }
    console.log(Math.floor(num));
    return Math.floor(num);
  };
  lastFindString([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    " * ",
    "/",
    " * ",
    "17",
    "+",
    "5",
    "+",
  ]);
}
