// 深拷贝
// Json.stringfy() lodash的_.cloneDeep

// 基本版
function deepClone1(origin) {
    if (typeof origin !== 'object' || typeof origin === null) {
        return origin
    }
    const target = Array.isArray(origin) ? [] : {}
    for (const key in origin) {
        if (origin.hasOwnProperty(key)) {
            target[key] = deepClone(origin[key])
        }
    }
    return target
}
// 优化:对函数、正则、Date、Map、Set进行处理，调用其自己的构造器生成对象
// 增加map防止循环引用
function deepClone(origin, map = new WeakMap()) {//WeakMap弱引用
    // 1.判断非对象类型或者null，直接返回原值
    if (typeof origin !== "object" || origin === null) {
        return origin
    }
    // 2.优化无法正确拷贝的对象
    const constructor = origin.constructor
    if (/^(Fuction | RegExp | Date | Map | Set)$/i.test(constructor.name)) {
        return new constructor(origin)
    }

    // 3.处理循环引用——自己引用自己
    // 如果已经拷贝过，直接返回之前保存的newObj
    if (map.has(origin)) {
        //返回拷贝过的新对象newObj
        return map.get(origin)
    }
    // 未拷贝过
    // 判断数组还是对象
    const target = Array.isArray(origin) ? [] : {}
    // 映射关系的标记
    map.set(origin, target) 
    
    // 4.递归进行拷贝
    for (const key in origin) { // 遍历origin每个key
        if (origin.hasOwnProperty(key)) {
            target[key] = deepClone(origin[key], map) //递归处理
        }
    }
    return target
}

// 浅拷贝
// 常见的类型：Object.assign、展开运算符、数组concat和slice
function shallowClone(origin) {
    // 1.只拷贝对象
    if (typeof origin !== "object" || typeof origin === null) return

    // 2.判断是数组还是对象，创建不同的容器
    let target = Array.isArray(origin) ? [] : {}

    // 3.遍历源object，并且判断只有在obj上的属性才拷贝
    for (let key in origin) {
        if (origin.hasOwnProperty(key)) {
            target[key] = origin[key]
        }
    }
    return target
}


function deepClone (origin, map = new WeakMap()) {
    if (typeof origin !== 'object' || typeof origin === 'null') {
        return origin;
    }
    let constructor = origin.constructor
    if (/^Function | RegExp | Date | Map | Set/i.test(constructor.name)) {
        return new constructor(origin)
    }

    // 处理循环引用
    if (map.has(origin)) {
        return map.get(origin)
    }

    const target = Array.isArray(origin) ? [] : {}
    map.set(origin, target)

    for (let key in origin) {
        if (origin.hasOwnProperty(key)) {
            target[key] = deepClone(origin[key])
        }
    }
    return target
}



function deepClone4(obj) {
    if (typeof obj !== 'object' || typeof obj === null) {
        return obj
    }
    let newObj  = Array.isArray(obj) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key])
        }
    }
    return newObj
}

const obj = {a: 1, b: 2, c: { d:1 }}
// const obj2 = shallowClone(obj)
const obj3 = deepClone4(obj)
obj.c.d = 3
console.log(obj)
console.log(obj3)