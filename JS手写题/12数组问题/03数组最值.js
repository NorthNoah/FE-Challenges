const arr = [23,123,342,12];
const getMax = arr => {
    // reduce(回调，初始值)
    return arr.reduce((pre, cur) => pre > cur ? pre : cur, 0)
}
console.log(getMax(arr))
