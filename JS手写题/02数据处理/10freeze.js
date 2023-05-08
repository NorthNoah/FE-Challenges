const _objFreeze = (obj) => {
	if (typeof obj !== "object" || obj === null) return
	// 获取对象所有属性
	const keys = Object.getOwnPropertyNames(obj);
	// 获取对象所有Symbol属性
	const symbols = Object.getOwnPropertySymbols(obj);
    [...keys, ...symbols].forEach((key) => {
		Object.defineProperty(obj, key, {
			configurable: false,
			writable: false,
		})
	})
    Object.preventExtensions(obj)
}
let obj = {"zhangsan": 123, "lisi": 567}
_objFreeze(obj)
obj = {"zhangsan": 8910}
console.log(obj)
