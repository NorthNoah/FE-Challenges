class Observerd {
  constructor() {
    // 我要看看到底有多少人在观察俺
    this.observerList = []
  }
  addObserver(observer) {
    // 添加一个观察俺的人
    this.observerList.push(observer)
  }
  notify() {
    // 我要闹点动静，所有观察者都会知道这个信息，具体怎么做就是他们自己的事情了
    this.observerList.forEach(observer => observer.update())
  }
}


class Observer {
  constructor(doSome) {
    // 观察到小白鼠有动静之后，观察者做的事情
    this.doSome = doSome
  }
  update() {
    console.log(this.doSome)
  }
}


const ob1 = new Observer('我是ob1，我观察到小白鼠有反应了，太饿了，我得去吃个饭了')
const ob2 = new Observer('我是ob2，我观察到小白鼠有反应了，我要继续工作！')
const xiaoBaiShu = new Observerd()
xiaoBaiShu.addObserver(ob1)
xiaoBaiShu.addObserver(ob2)
xiaoBaiShu.notify() // .... ...

class Observerd {
  constructor() {
    // 维护一个观察者的数组
    this.observerList = []
  }
  addObserver(observer) {
    // 添加观察者
    this.observerList.push(observer)
  }
  notify() {
    // 通知所有观察者
    this.observerList.forEach(obs => obs.update())
  }
}

class Observer {
  // 被通知后做的事情
  constructor(doSome) {
    this.doSome = doSome
  }
  update() {
    console.log(this.doSome)
  }
}