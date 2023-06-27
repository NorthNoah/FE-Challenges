// push(x): 元素x入栈
// pop(): 移除栈顶元素
// top(): 获取栈顶元素
// empty(): 返回栈是否为空

// 用一个队列模仿栈
namespace A {
  class myStack {
    private queue: number[];
    constructor() {
      this.queue = [];
    }
    push(x: number) {
      this.queue.push(x);
    }
    pop(): number {
      for (let i = 0; i < this.queue.length; i++) {
        this.queue.push(this.queue.shift()!);
      }
      return this.queue.shift()!;
    }
    top(): number {
      let res: number = this.pop();
      this.push(res);
      return res;
    }
    empty(): boolean {
      return this.queue.length === 0;
    }
  }
}
