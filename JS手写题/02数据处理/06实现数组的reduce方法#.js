// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
Array.prototype._reduce = function(fn, initalVal = 0) {
    if (typeof fn !== "function") {
        throw Error("参数必须为一个函数")
    }
    let res = initalVal
    for (let i = 0; i < this.length; i++) {
        res = fn(res, this[i], i, this)
    }
    return res
}
const arr = [1, 2, 3, 4, 5]
console.log(arr._reduce((total, cur) => total += cur, 0))