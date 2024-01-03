// 柯里化的定义：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。
// ES6写法
function curry(fn) {
    return function temp(...args) {
        // 执行
        if (fn.length === args.length) {
            return fn(...args)
        } else {
            // 返回中间函数，函数中调用temp函数，进行参数拼合
            return function(...arg) {
                return temp(...arg, ...args)
            }
        }
    }
}
function add(a, b, c) {
    return a + b + c
}

let curryAdd = curry(add)
let a = curryAdd(1, 2, 3)
let b = curryAdd(1)(2, 3)
let c = curryAdd(1)(2)(3)
console.log(a, b, c)

function currying(fn) {
    return function temp(...args) {
        if (fn.length === args.length) {
            return fn(...args)
        } else {
        
            return function(...newArgs) {
                return temp(...args, ...newArgs)
            }
        }

    }
}
let curryAdd2 = currying(add)
let d = curryAdd2(1, 2, 3)
let e = curryAdd2(1)(2, 3)
let f = curryAdd2(1)(2)(3)
console.log(d, e, f)

function curry(fn) {
    return function temp(...args) {
        if (fn.length === args.length) {
            fn(...args)
        } else {
            // 返回中间函数
            return function fn(...newArgs) {
                return temp(...args, ...newArgs)
            }
        }
    }
}