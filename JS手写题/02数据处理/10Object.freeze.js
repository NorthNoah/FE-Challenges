// 无法对本身属性进行增删改，只能查
const _objFreeze = (obj) => {
	if (typeof obj !== "object" || obj === null) return
	// 获取对象所有属性
	const keys = Object.getOwnPropertyNames(obj)
	// 获取对象所有Symbol属性
	const symbols = Object.getOwnPropertySymbols(obj)
	;[...keys, ...symbols].forEach((key) => {
		Object.defineProperty(obj, key, {
			// 可配置性：改变描述符
			configurable: false,
			// 可写性：改变value
			writable: false,
		})
	})
	// 不能添加新的属性
	Object.preventExtensions(obj)
}
let obj = { name: "zhangsan", age: 56 }
_objFreeze(obj)
obj.name = "lisi"
console.log(obj)
