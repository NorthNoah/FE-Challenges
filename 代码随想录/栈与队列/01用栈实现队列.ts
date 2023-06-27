// 实现功能：push(x)--将一个元素放入队列的尾部
// pop(): 从队列首部移除元素
// peek():返回队列首部的元素
// empty(): 返回队列是否为空
class myQueue {
  private stackIn: number[];
  private stackOut: number[];
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }
  push(x: number) {
    this.stackIn.push(x);
  }
  pop(): number {
    if (this.stackOut.length === 0) {
      while (this.stackOut.length > 0) {
        this.stackOut.push(this.stackIn.pop()!);
      }
    }
    return this.stackOut.pop()!; // 非空断言
  }
  peek(): number {
    const temp: number = this.pop();
    this.stackOut.push(temp);
    return temp;
  }
  empty(): boolean {
    return this.stackOut.length === 0 && this.stackIn.length === 0;
  }
}
