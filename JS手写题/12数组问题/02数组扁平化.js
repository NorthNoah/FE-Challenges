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
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flat3(cur) : cur)
    }, [])
}

console.log(flat1(arr))
console.log(flat2(arr))
console.log(flat3(arr))