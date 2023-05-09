function repeat(s, n) {
    // 长度为3，用两个s元素连接
    return new Array(n + 1).join(s)
}
let str = "abc"
console.log(repeat(str, 2))
