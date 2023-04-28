const arr = [1,2,3,4,4,4]

// Map + filter：使用map筛选
const unique = arr => {
    const map = new Map()
    // 若不存在key（item），则不计入筛选；若
    const res = arr.filter(item => !map.has(item) && map.set(item, 1))
    return res
}

// filter + indexOf:寻找第一次出现的index，与实际index进行比较
const unique2 = arr => {
    const map = 
}


