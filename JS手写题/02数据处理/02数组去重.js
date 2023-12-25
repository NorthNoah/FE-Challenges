const arr = [1,2,3,4,4,4]

// set直接去重
const unique = arr => {
    const res = Array.from(new Set(arr))
    return res
}

// includes + map：新建数组[],不含则push
const unique2 = arr => {
    let res = []
    arr.map(item => {
        // 当结果数组中不含有当前元素，则push进入数组
        if (!res.includes(item)) {
            res.push(item)
        }
    })
    return res
}

// filter + indexOf:寻找第一次出现的index，与实际index进行比较
const unique3 = arr => {
    const res = arr.filter((item, index) => arr.indexOf(item) === index) 
    return res
}

// filter + map：使用map标记元素，filter进行筛选
const unique4 = arr => {
    const map = new Map()
    // 若不存在key（item），则不计入筛选；若
    // &&：只要第一个为true（没有key，则直接设置(key, 1))
    const res = arr.filter(item => !map.has(item) && map.set(item, 1))
    return res
}

console.log(unique(arr))
console.log(unique2(arr))
console.log(unique3(arr))
console.log(unique4(arr))