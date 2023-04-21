// 柯里化的定义：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。
// ES6写法
function curry(fn) {
    return function temp(...args) {
        if (fn.length === args.length) {
            return fn(...args)
        } else {
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
