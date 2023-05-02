function _flat(arr, depth) {
    // 递归结束条件
    if (!Array.isArray(arr) || depth <= 0) {
        return arr
    }
    // reduce初始要为[]
    return arr.reduce((total, cur) => {
        if (Array.isArray(cur)) {
            // 递归，继续展开，此时需要depth-1
            return total.concat(_flat(cur, depth - 1))
        } else {
            // 直接concat
            return total.concat(cur)
        }
    }, [])
}
const arr = [1, [2, 3], 4, 5]
console.log(_flat(arr))
