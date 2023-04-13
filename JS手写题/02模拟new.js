// 请你说说new的过程
// 1.创建一个新对象
// 2.将新对象的__proto__指向构造函数的原型prototype
// 3.将构造函数的this更改为新的对象，并执行构造函数（call/apply）
// 4.返回新对象，注意对对象的类型进行校验，确保返回了object
function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance, args)
    // 类型校验
    return typeof instance === 'object' ? res : instance
}