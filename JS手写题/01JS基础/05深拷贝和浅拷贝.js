// 深拷贝
// Json.stringfy() lodash的_.cloneDeep
function deepClone(target, map = new WeakMap()) {//WeakMap弱引用
    // 1.判断非对象类型
    if (!target || typeof target !== "object") {
        return target
    }
    // 2.判断数组还是对象
    const newObj = Array.isArray(target) ? [] : {}
    // 3.处理循环引用——自己引用自己
    // 如果已经拷贝过，直接返回之前保存的newObj
    if (map.has(target)) {
        //返回拷贝过的新对象newObj
        return map.get(target)
    }
    // 4.未拷贝过
    //先标记拷贝过
    map.set(target, newObj) 
    // 递归进行拷贝
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            newObj[key] = deepClone(target[key])
        }
    }
}

// 浅拷贝
// 常见的类型：Object.assign、展开运算符、数组concat和slice
function shallowClone(target) {
    // 1.只拷贝对象
    if (!target || typeof target !== "object") return

    // 2.判断是数组还是对象，创建不同的容器
    let newObj = Array.isArray(target) ? [] : {}

    // 3.遍历object，并且判断只有在obj上的属性才拷贝
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            newObj[key] = target[key]
        }
    }
    return newObj
}