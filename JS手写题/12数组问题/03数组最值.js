const arr = [23,123,342,12];
const getMax = arr => {
    return arr.reduce((pre, cur) => pre > cur ? pre : cur, 0)
}
console.log(getMax(arr))
