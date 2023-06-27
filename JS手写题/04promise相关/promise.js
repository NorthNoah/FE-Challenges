const PROMISE_STATUS_PENDING = "pendings";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

class Promise_ {
  constructor(excu) {
    this.initValue()
    this.initBind()

    /**promise中有throw时，就自动执行reject */
    try {
      excu(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  /**对resolve和reject进行绑定，始终指向Promise_这个类 */
  initBind() {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  /**初始化值，promise的初始状态为pending，结果初始为null */
  initValue() {
    this.PromiseStatus = PROMISE_STATUS_PENDING;
    this.promiseResult = null

    /**保存成功时的回调 */
    this.onFulfillCallback = []
    /**保存失败时的回调 */
    this.onRejectCallback = []
  }

  /**执行了resolve,promise状态变为fulfilled */
  resolve(value) {
    /**Promise只以第一次为准，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected */
    if (this.PromiseStatus !== PROMISE_STATUS_PENDING) return

    this.PromiseStatus = PROMISE_STATUS_FULFILLED
    this.promiseResult = value

    /**定时器结束之后执行 */
    this.onFulfillCallback.shift()(this.promiseResult)
  }

  /**执行了reject，promise状态变为rejected */
  reject(value) {
    if (this.PromiseStatus !== PROMISE_STATUS_PENDING) return

    this.PromiseStatus = PROMISE_STATUS_REJECTED
    this.promiseResult = value

    /**定时器结束后执行 */
    this.onRejectCallback.shift()(this.promiseResult)
  }

  /**实现Promise.then */

  /**then接收两个回调，一个是成功回调，一个是失败回调
   * 当Promise状态为fulfilled执行成功回调，为rejected时执行失败回调
   */
  then(onFulfill, onReject) {
    /**参数校验，需要为函数 */
    onFulfill = typeof onFulfill === 'function' ? onFulfill : val => val
    onReject = typeof onReject === 'function' ? onReject : val => { throw (val) }

    /**实现then的链式调用，then可以执行链式调用的原因: then返回的是一个新的promise对象 */
    var thenPromise = new Promise_((resolve, reject) => {
      let resolvePromise = (resultFun) => {
        /**微任务，用定时器实现,使resolvePromise异步执行 */
        setTimeout(() => {
          try {
            let x = resultFun(this.promiseResult)
            if (x === thenPromise) {
              throw new Error('不能返回自身')
            }
            if (x instanceof Promise_) {
              x.then(resolve, reject)
            } else {
              /**非Promise则直接成功 */
              resolve(x)
            }
          } catch (error) {
            reject(error)
            throw new Error(error)
          }
        })
      }
      /** 定时器情况——解决方案：先保存then里面的回调函数(状态为pending则证明有定时器存在)，等到定时器结束之后根据执行的是resolve还是reject再进行执行then里面的回调*/

      if (this.PromiseStatus === PROMISE_STATUS_FULFILLED) {
        /**成功执行第一个回调 */
        resolvePromise(onFulfill)
      } else if (this.PromiseStatus === PROMISE_STATUS_REJECTED) {
        /**失败执行第二个回调 */
        resolvePromise(onReject)
      } else if (this.PromiseStatus === PROMISE_STATUS_PENDING) {
        console.log(this, 'this')
        this.onFulfillCallback.push(resolvePromise.bind(this, onFulfill))
        this.onRejectCallback.push(resolvePromise.bind(this, onReject))
      }
    })
    return thenPromise
  }

  /**执行then的第二个参数 */
  catch(onRejected) {
    this.then(undefined, onRejected)
  }

  /**无论怎么都会执行 */
  finally(onFinally) {
    this.then((onFinally) => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  /** 
   * 接收一个Promise数组，数组中若有非Promise项，则此项当作成功
   * 如果所有Promise都成功，则返回成功结果数组
   * 如果有一个Promise失败，则返回这个失败结果
   * @param {Promise_[]} allPromise 
  */
  all(allPromise) {
    let result = []
    let count = 0
    return new Promise_((resolve, reject) => {
      const addData = (index, value) => {
        result[index] = value
        count++
        if (count === allPromise.length) {
          resolve(result)
        }
      }
      allPromise.forEach((item, index) => {
        if (item instanceof Promise_) {
          item.then((res) => addData(index, res), (err) => reject(err))
        } else {
          addData(index, item)
        }
      })
    })
  }

  /**
   * 接收一个Promise数组，数组中若有非Promise项，则此项当作成功
   * 如果有一个promise成功，则返回这个成功结果
   * 如果有一个promise失败，则返回这个失败结果
   * @param {Promise_[]} allPromise 
  */
  race(allPromise) {
    return new Promise_((resolve, reject) => {
      allPromise.forEach((promise, index) => {
        if (promise instanceof Promise_) {
          promise.then((res) => resolve(res), (err) => reject(err))
        } else {
          resolve(promise)
        }
      })
    })
  }

  /**
   * 接收一个promise数组，数组中若有非promise项，则把此项当作成功
   * 把每一个promise的结果，集合成数组，返回
   */
  allSettled(allPromise) {
    return new Promise_((resolve, reject) => {
      let result = []
      let count = 0
      const addData = (value, item, index) => {
        result[index] = { value, item }
        count++
        if (count === allPromise.length) {
          resolve(result)
        }
      }
      allPromise.forEach((item, index) => {
        if (item instanceof Promise_) {
          item.then((res) => addData('fulfilled', res, index), (error) => addData('rejected', error, index))
        } else {
          addData(item, index)
        }
      })
    })
  }

  /**
   * 接收一个Promise数组，数组中若有非promise项，则把此项当作成功
   * 如果有一个Promise成功，则返回这个成功结果
   * 如果所有Promise都失败，则返回这个失败结果数组
   * @param {Promise_[]} allPromise 
   */
  any(allPromise) {
    return new Promise_((resolve, reject) => {
      let result = []
      let count = 0
      const addResult = (item, index) => {
        result[index] = item
        count++
        if (count === allPromise.length) {
          reject(result)
        }
      }

      allPromise.forEach((promise, index) => {
        if (promise instanceof Promise_) {
          promise.then((res) => resolve(res), (err) => addResult(err, index))
        } else {
          resolve(promise)
        }
      })
    })
  }
}

/**
 * 
 * @param {Promise[]} allPromise 
 * @returns 
 */
const all = (allPromise) => {
  return new Promise((resolve, reject) => {
    let count = 0
    let result = []

    const addData = (item, index) => {
      result[index] = item
      count++
      if (count === allPromise.length) {
        resolve(result)
      }
    }

    allPromise.forEach((item, index) => {
      if (item instanceof Promise) {
        Promise.then((res) => { addData(res, index) }, (err) => { reject(err) })
      }
    })
  })
}