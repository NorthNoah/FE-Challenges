// filter 过滤,filter()使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组。
Array.prototype._filter = function (fn) {
	if (typeof fn !== "function") return
	const res = []
	for (let i = 0; i < this.length; i++) {
		fn(this[i]) && res.push(this[i])
	}
	return res
}
const arr = [1, 2, -1, 3, 0]
console.log(arr._filter((item) => item > 0))
