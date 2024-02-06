// 判断当前对象是否是构造函数的实例：判断fuc是否在实例obj的原型链上
// obj.__proto__ = func.prototype
function myInstanceof(obj, func) {
    // 1.获取当前对象的原型
    let proto = Object.getPrototypeOf(obj)
    // 2.沿obj的原型链向上查找func的prototype
    while(true) {
        // 查找到原型链最上层，未找到返回false
        if (proto === null) {
            return false
        }

        // 在obj的原型链上，找到了当前类
        if (proto === func.prototype) {
            return true
        }
        // 继续沿着原型链向上查找
        proto = Object.getPrototypeOf(proto) //proto.__proto__
    }
}



// 12.25-寒假实习准备
function myInstanceof (obj, func) {
    let proto = Object.getPrototypeOf(obj)
    
    while (true) {
        // 终止条件：查找到了原型链的末尾
        if (proto === null) {
            return false
        }

        // 成功：
        if (proto === func.prototype) {
            return true
        }   

        // 迭代查找
        proto = Object.getPrototypeOf(proto)
    }
}

function myInstanceof(obj, fn) {
    let proto = Object.getPrototypeOf(obj)
    while (true) {
        if (proto === null) {
            return false
        }
        if (proto === fn.prototype) {
            return true
        }
        // 继续向上查找
        proto = Object.getPrototypeOf(obj)
    }
}


function Person(name, age) {
    this.name = name 
    this.age = age
}

let p1 = new Person('Noah', 18)
console.log(myInstanceof(p1, Object))
