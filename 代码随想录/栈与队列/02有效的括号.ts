namespace A {
  // 用队列搭建栈,栈是先进后出，队列是先进先出，所以push方法可以直接将数据传到
  // 列表的末尾，然后pop方法可以先将最后一位元素前的元素移到此元素后面，弹出此元素
  // 后即可。
  class MyStack {
    private queue: string[];
    constructor() {
      this.queue = [];
    }
    push(str: string) {
      this.queue.push(str);
    }

    pop(): string {
      if (this.queue.length === 0) {
        while (this.queue.length > 0) {
          for (let i = 0; i < this.queue.length - 1; i++) {
            this.queue.push(this.queue.shift()!);
          }
        }
      }
      return this.queue.pop()!;
    }

    peak(): string {
      let strPeak: string = this.pop(); // 弹出
      this.push(strPeak); // 添加进去
      return strPeak;
    }

    empty(): boolean {
      return this.queue.length === 0;
    }
  }
  const searchHao = (str: string): boolean => {
    let helpStack: string[] = [];
    for (let i = 0; i < str.length; i++) {
      let x: string = str[i];
      switch (x) {
        case "(":
          helpStack.push(")");
          break;
        case "[":
          helpStack.push("]");
          break;
        case "{":
          helpStack.push("}");
          break;
        default:
          if (helpStack.pop() !== x) return false;
          break;
      }
    }
    return helpStack.length === 0;
  };
}
