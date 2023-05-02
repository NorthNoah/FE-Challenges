// 创建一个新数组来存入 传进来的回调函数的执行结果，最后返回新数组。
Array.prototype._map = function(fn) {
    if (typeof fn !== "function") {
        throw Error("参数必须为一个函数")
    }
    const res = []
    // this即为调用者arr
    for (let i = 0; i < this.length; i++) {
        // 执行后将结果push入res数组
        res.push(fn(this[i]));
    }
    return res;
}
const arr = [23,123,342,12]
console.log(arr._map(item => -item))