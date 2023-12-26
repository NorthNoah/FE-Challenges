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
    // 3.类型校验，确保构造函数执行后返回对象
    return res instanceof Object ? res : instance
}


// 12.25
function myNew (fn, ...args) {
    // 创建一个新对象，并且将该对象的__proto__指向构造函数fn的prototype
    let instance = Object.create(fn.prototype)
    
    // 通过call调用的方式，将构造函数的this指向对象instance,并执行构造函数
    let res = fn.apply(instance, args)

    // 类型校验：apply执行构造函数后是否仍然返回一个对象
    return res instanceof Object ? res : instance
    
}

function myNew (fn, ...args) {
    let instance = Object.create(fn.prototype)
    let res = fn.apply(instance, args)
    return res instanceof Object ? res : instance
}

