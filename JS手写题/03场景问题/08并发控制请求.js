class Scheduler {
  constructor(max) {
    // 最大可并发任务数
    this.max = max;
    // 当前并发任务数
    this.count = 0;
    // 任务队列
    this.queue = [];
  }

  add(fn) {
    this.queue.push(fn)
    this.run()
  }
  run() {
    if (this.count >= this.max || this.queue.length === 0) return
    this.count++
    Promise.resolve(this.queue.shift()()).finally(() => {
      this.count--
      this.run()
    })
  }
}


class Scheduler2 {
  constructor(max) {
    this.max = max
    this.count = 0
    this.queue = []
  }
  // 加入任务队列
  add(fn) {
    this.queue.push(fn)
    this.run()
  }
  // 执行
  run() {
    // 超出队列
    if (this.queue.length === 0 || this.count >= this.max) return
    // 正在执行的任务数+1
    this.count++
    // 从任务队列头部中取出一个来执行
    let taskFn = this.queue.shift()
    Promise.resolve(taskFn())
    // 执行完毕，继续执行下一个任务，并且修改正在执行的任务数量
    .finally(() => {
      this.count--
      this.run()
    })
  }
}



// 延迟函数
const sleep = time => new Promise(resolve => setTimeout(resolve, time));

// 同时进行的任务最多2个
const scheduler = new Scheduler2(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time, val) => {
  scheduler.add(() => {
    return sleep(time).then(() => console.log(val));
  });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4
