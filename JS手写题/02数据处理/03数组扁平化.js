const arr = [1, [2, [3, [4, 5]]]]

// 1.flat,可指定深度
const flat1 = arr => arr.flat(3)

// 2.toString + split
const flat2 = (arr) => {
    const res = 
	arr.toString().split(",").map(item => +item)
    return res
}

// 3.reduce + concat
const flat3 = arr => {
    // pre：累积和，cur：当前元素
    return arr.reduce((total, cur) => {
        if (Array.isArray(cur)) {
            return total.concat(flat3(cur))
        } else {
            return total.concat(cur)
        }
    }, [])
}

// 4.递归实现扁平化
const flatten = arr => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 仍存在未扁平的数组，递归后拼接
            res = res.concat(flatten(arr[i]))
        } else {
            // 已经扁平，直接push进res
            res.push(arr[i])
        }
    }
    return res
}

console.log(flat1(arr))
console.log(flat2(arr))
console.log(flat3(arr))
console.log(flatten(arr))
