// 数组最值：reduce比较
const arr = [23,123,342,12];
const getMax = arr => {
    // reduce(回调，初始值)
    return arr.reduce((pre, cur) => pre > cur ? pre : cur, 0)
}
// console.log(getMax(arr))

// 数组求和：reduce累加
// 1.一维数组直接用reduce求和
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = arr2.reduce((total, i) => total += i, 0)
// console.log(sum)

// 2.二维数组先扁平再求和
let arr3 = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
// toString+split扁平化
let res = arr3.toString().split(",").reduce((total, i) => total += Number(i), 0)
// console.log(res)