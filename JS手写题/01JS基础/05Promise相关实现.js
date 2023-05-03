const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("66666")
	}, 300)
})
const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("77777")
	}, 200)
})
const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("88888") // 相当于 return new Promise.reject("88888")
	}, 200)
})

// 手写Promise：思路
const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"

function MyPromise(fn) {
	// 保存初始化状态
	var self = this

	// 初始化状态
	this.state = PENDING

	// 用于保存 resolve 或者 rejected 传入的值
	this.value = null

	// 用于保存 resolve 的回调函数
	this.resolvedCallbacks = []

	// 用于保存 reject 的回调函数
	this.rejectedCallbacks = []

	// 状态转变为 resolved 方法
	function resolve(value) {
		// 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
		if (value instanceof MyPromise) {
			return value.then(resolve, reject)
		}

		// 保证代码的执行顺序为本轮事件循环的末尾
		setTimeout(() => {
			// 只有状态为 pending 时才能转变，
			if (self.state === PENDING) {
				// 修改状态
				self.state = RESOLVED

				// 设置传入的值
				self.value = value

				// 执行回调函数
				self.resolvedCallbacks.forEach((callback) => {
					callback(value)
				})
			}
		}, 0)
	}

	// 状态转变为 rejected 方法
	function reject(value) {
		// 保证代码的执行顺序为本轮事件循环的末尾
		setTimeout(() => {
			// 只有状态为 pending 时才能转变
			if (self.state === PENDING) {
				// 修改状态
				self.state = REJECTED

				// 设置传入的值
				self.value = value

				// 执行回调函数
				self.rejectedCallbacks.forEach((callback) => {
					callback(value)
				})
			}
		}, 0)
	}

	// 将两个方法传入函数执行
	try {
		fn(resolve, reject)
	} catch (e) {
		// 遇到错误时，捕获错误，执行 reject 函数
		reject(e)
	}
}

MyPromise.prototype.then = function (onResolved, onRejected) {
	// 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
	onResolved =
		typeof onResolved === "function"
			? onResolved
			: function (value) {
					return value
			  }

	onRejected =
		typeof onRejected === "function"
			? onRejected
			: function (error) {
					throw error
			  }

	// 如果是等待状态，则将函数加入对应列表中
	if (this.state === PENDING) {
		this.resolvedCallbacks.push(onResolved)
		this.rejectedCallbacks.push(onRejected)
	}

	// 如果状态已经凝固，则直接执行对应状态的函数

	if (this.state === RESOLVED) {
		onResolved(this.value)
	}

	if (this.state === REJECTED) {
		onRejected(this.value)
	}
}

// 一、基本静态方法实现：resolve,reject,finally
Promise.myResolve = function (param) {
	// 1.Promise直接返回
	if (param instanceof Promise) {
		return param
	}
	// 2.thenable对象会进行跟随
	return new Promise((resolve, reject) => {
		if (param && param.then && typeof param.then === "function") {
			// 决定权交给param
			param.then(resolve, reject)
		} else {
			// 3.其他类型对象会包装为promise对象并返回
			resolve(param)
		}
	})
}
// reject方法实现：参数reason会不断传递
Promise.reject = function (reason) {
	return new Promise((resolve, reject) => {
		reject(reason)
	})
}

// finally原封不动传值，执行传入的函数
Promise.prototype.finally = function (callback) {
	this.then(
		(value) => {
			return Promise.resolve(callback()).then(() => {
				return value
			})
		},
		(err) => {
			return Promise.resolve(callback()).then(() => {
				return err
			})
		}
	)
}

// 二、all:接收一个Promise数组，返回一个新Promise实例；都成功才成功，一个不成功则会catch
Promise.myAll = function (promises) {
	let result = []
	let index = 0
	// 传入为空，返回promise包裹的空数组
	if (promises.length === 0) {
		resolve(result)
		return
	}
	// 遍历接收的promises数组
	for (let i = 0; i < promises.length; i++) {
		// 使用then收集成功返回，catch收集错误
		Promise.resolve(promises[i])
			.then((res) => {
				// 收集成功后返回的结果
				result[i] = res
				index++
				// 全部执行完毕，返回有序数组
				if (index === len) {
					resolve(result)
				}
			})
			.catch((err) => {
				// 任一错误，直接reject
				reject(err)
			})
	}
}

// 三、race方法：只返回最快被调用的一个
// resolve和reject的状态不可变性，调用一次不会再次调用
Promise.myRace = function (promises) {
	return new Promise((resolve, reject) => {
		for (const item of promises) {
			Promise.resolve(item).then(resolve, reject)
		}
	})
}

// 四、any:只要有一个成功就成功，全部失败才失败
Promise.myAny = function (promises) {
	let res = []
	let index = 0
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i]).then(resolve, (err) => {
				res[i] = { status: "reject", value: err }
				index++
				if (index === promises.length) {
					reject(new Error("没有promise成功"))
				}
			})
		}
	})
}

// 五、allSettled:无论成功与否，都要等待执行完成才能进行下一步操作
Promise.allSettled = function (promises) {
	let res = []
	let index = 0
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then((res) => {
					res[i] = { status: "fulfilled", value: res }
					index++
					if (index === promises.length) {
						resolve(res)
					}
				})
				.catch((err) => {
					res[i] = { status: "rejected", value: error }
					index++
					if (index === promises.length) {
						reject(err)
					}
				})
		}
	})
}
