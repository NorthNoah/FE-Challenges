// 被观察者
class Observered {
    constructor() {
        this.observers = []
    }

    // 添加观察者
    addObserver(observer) {
        this.observers.push(observer)
    }

    // 通知观察者
    notify() {
        this.observers.forEach(observer => observer.update())
    }
}

class Observer {
    constructor(dosome) {
        // 观察者接到被观察者通知后执行逻辑
        this.dosome = dosome
    }
    update() {
        // 目标对象通知所有观察者的内容
        console.log(this.dosome)
    }
}

// 观察者
const ob1 = new Observer('我是观察者1， 观察到目标对象有反应')
const ob2 = new Observer('我是观察者2， 观察到目标对象有反应')

// 被观察者 
const observered = new Observered()
observered.addObserver(ob1) //添加观察者1
observered.addObserver(ob2) //添加观察者2
observered.notify()

