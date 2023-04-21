class EventEmitter {
    constructor() {
      // 事件对象，存放订阅的名字和事件
      this.events = {};
    }
    // 订阅事件的方法
    on(name, callback) {
        // 之前不存在此订阅名对应的回调方法数组
        if (!this.events[name]) {
            this.events[name] = [callback]
        } else {
            this.events[name].push(callback)
        }

    }    
    // off:取消订阅
    off(name, callback) {
        // 未注册事件直接返回
        if (!this.events[name]) {
            return
        }
        // 没有callback，则删除整个事件
        if (!callback) {
            this.events[name] = undefined
        }
        // 删除指定callback函数
        this.events[name] = this.events[name].filter(item => item !== callback)
    }
    emit(name, ...args) {
        if (!this.events[name]) return
        this.events[name].forEach(cb => cb(...args))
    }
  }