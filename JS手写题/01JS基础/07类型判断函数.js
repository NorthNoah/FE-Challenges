function getType(value) {
    // 判断null
    if (value === null) {
        return value + "" //"null"
    }

    // 判断引用类型
    // typeof:数组、对象、null都为object类型,此处可能是数组或对象类型
    if (typeof value === "object") {
        let valueClass = Object.prototype.toString.call(value)
        // [object Array]或[object Object]，去掉object
        let type = valueClass.split(" ")[1].split("")
        // 去掉"]"
        type.pop()
        return type.join("").toLowerCase()
    } else {
        // 判断基本类型或函数，直接typeof
        return typeof value
    }
}
let arr = []
let obj = {}
console.log(getType(arr))