// 手写call
Function.prototype.mycall = function (context = window, ...args) {
	// 1.生成索引key
	let key = Symbol("key")
	// 2.挂载函数this到context对象上
	context[key] = this
	// 3.执行函数,传入的参数为...args
	let result = context[key](...args)
	// 4.删除属性,防止污染
	delete context[key]
	// 5.返回执行结果
	return result
}

// 手写apply
// 1.生成索引
// 2.挂载函数到context
// 3.执行函数,注意传入参数为...args
// 4.删除属性,防止污染
// 5.返回执行结果
Function.prototype.myApply = function (context = window, args = []) {
	let key = Symbol("key")
	context[key] = this
	let result = context[key](...args)
	// 删除obj上的该方法，否则会越来越多
	delete context[key]
	return result
}



// 手写bind:简单实现,注意参数的拼接问题
Function.prototype.myBind= function(context, ...outerArgs) {
    // 1.self指向func本身
    let self = this

    // 2.返回一个绑定了context的新函数
    return function F(...innerArgs) {
        // 判断新的函数是否为new调用,如果是则忽略传入的context
        if (self instanceof F) {
            return new self(...outerArgs, ...innerArgs)
        }
        // 返回改变指向后的函数调用结果
        return self.apply(context, [...outerArgs, innerArgs])
    }
}


// 测试代码
function f(a, b) {
	console.log(a, b)
	console.log(this.name)
}
let obj = {
	name: "张三",
}
// f.myApply(obj, [1, 2])
// 返回的函数f this永久指向obj
let obj2 = {
    name: "Noah"
}
f.myBind(obj2, 1)(2)
