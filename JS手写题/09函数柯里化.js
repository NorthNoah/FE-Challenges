// ES6写法
function curry(fn) {
    let judge = (...args) => {
        // 若本次执行的实际参数和形参数量相等，则直接执行fn即可
        if (args.length === fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }
    return judge
}