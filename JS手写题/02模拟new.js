// 请你说说new的过程
// 1.创建一个新对象
// 2.将新对象的__proto__指向构造函数的原型prototype
// 3.将构造函数的this更改为新的对象，并执行构造函数（call/apply）
// 4.返回新对象，注意对对象的类型进行校验，确保返回了object
function myNew(fn, ...args) {
    // 1.创建一个__proto__指向构造函数prototype的新对象
    let instance = Object.create(fn.prototype)
    // 2.更改构造函数的this指向，并执行构造函数（apply方式
    let res = fn.apply(instance, args)
    // 3.类型校验，确保返回对象
    return typeof instance === 'object' ? res : instance
}

// 模拟Object.create：将构造函数的prototype指向指定proto，然后new Fn()自动绑定
function ObjectCreate(proto) {
    function Fn() {}
    Fn.prototype = proto
    // 自动绑定newObj = Fn.prototype = proto
    return new Fn()
}


