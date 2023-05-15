// 大数相加：字符串保存大数，转化为数组计算；将当前位的结果对10进行取余操作，保存结果；
function sumBigNumber(a, b) {
    a = a + ""
    b = b + ""
    // 找最大的length，头部补零
    let len = Math.max(a.length, b.length)
    a = a.padStart(len, '0')
    b = b.padStart(len, '0')

    let res = []
    // 倒序按位相加
    for (let i = len - 1; i >= 0; i--) {
        // 相加进位,注意此时可能有进位
        let sum = Number(a[i]) + Number(b[i]) + (res[0] || 0)
        let low = sum % 10 //本位的计算结果
        let high = Math.floor(sum / 10)//进位数字

        res[0] = low
        res.unshift(high)
    }
    return +res.join('')
}
console.log(sumBigNumber(22,25))
console.log(sumBigNumber(31,33111))


// 大数相乘
function multiplyBigNum(a, b) {
    a = a.toString()
    b = b.toString()

    let len1 = a.length
    let len2 = b.length
    let res = []

    for (let j = len2 - 1; j >= 0; j--) {
        for (let i = len1 - 1; i >= 0; i--) {
            // 十位
            let index1 = i + j
            // 个位
            let index2 = i + j + 1
            // index2：现在的个位，之前的十位
            let mult = a[i] * b[j] + (res[index2] || 0)
            res[index1] = Math.floor(mult / 10)
            res[index2] = mult % 10
        }
    }
    return +res.join("")
}
console.log(multiplyBigNum(33, 22))