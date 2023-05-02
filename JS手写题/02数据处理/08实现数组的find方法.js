// 返回第一个满足条件的数组元素，如果没找到 返回undefined
Array.prototype._find = function(fn) {
    if (typeof fn !== "function") return
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}
const arr = [1, 2, 3, 4, 5]
console.log(arr._find(item => item > 3))
