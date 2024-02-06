class EventEmiter {
    constructor() {
        this.cache = []
    }

    // on:订阅指定事件，传入回调函数
    on(name, fn){
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }
    // off: 删除指定事件的回调函数
    off(name, fn) {
        let tasks = this.cache[name]
        const index = tasks.findIndex(func => func === fn)
        // 如果找到，删除
        if (index !== -1) {
            tasks.splice(index, 1)
        }
    }

    emit(name, ...args) {
        if (this.cache[name]) {
            // 拷贝事件中的函数数组，防止once注册的函数在移除时出现顺序问题
            const tasks = this.cache[name].slice()
            tasks.forEach(fn => {
                fn(...args)
            });
        }
    }

    once(name, fn) {
        // 包装回调函数，执行完毕自动移除
        const onceFn = (...args) => {
            fn(...args)
            this.off(name, onceFn)
        }
        this.on(name, onceFn)
    }
}
// test
let eventsBus = new EventEmiter()
let fn1 = function(name,age){
  console.log(name,age)
}
let fn2 = function(name,age){
  console.log('fn',name,age);
}
let fn3 = function(name,age){
    console.log('一次郎');
}
eventsBus.on("test",fn1)
eventsBus.on("test2",fn2)
eventsBus.once("test3",fn3)
eventsBus.emit("test2", "Jason", 18)
eventsBus.emit("test3")
eventsBus.emit("test3")
eventsBus.emit("test3")

// eventsBus.once("test", "Jason", 18)

class EventsBus {
    constructor() {
        this.cache = []
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    } 

    off(name, fn) {
       let tasks = this.cache[name]
       let index = tasks.findIndex(f === fn)
       if (index != -1) {
        this.cache[name].splice(index, 1)
       }
    }
    
    emit(name, ...args) {
        if (this.cache[name]) {
            const tasks = this.cache[name].slice()
            tasks.forEach(fn => fn(...args))
        }
    }

    once(name, fn) {
        const onceFn = (...args) => {
            fn(...args)
            this.off(name, onceFn)
        }
        this.on(onceFn)
    }
    
}


class EventEmiters {
    constructor() {
        this.cache = []
    }

    on(name, fn) {
        if(!this.cache[name]) {
            this.cache[name] = [fn]
        } else {
            this.cache[name].push(fn)
        }
    }
    
    emit(name, ...args) {
        if (this.cache[name]) {
            let tasks = this.cache[name].slice()
            tasks.forEach(task => task(...args))
        }
    }

    off(name, fn) {
        let tasks = this.cache[name]
        let index = tasks.findIndex(f => f === fn)
        if (index !== -1) {
            tasks.splice(index, 1)
        }
    } 
}