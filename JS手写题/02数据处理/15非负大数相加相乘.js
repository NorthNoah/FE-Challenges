// 大数相加：字符串保存大数，转化为数组计算；将当前位的结果对10进行取余操作，保存结果；
function sumBigNumber(a, b) {
    let res = ''
    let temp = 0
    
    // 转为数组
    a = a.toString().split('')
    b = b.toString().split('')

    // while循环，对每一位进行相加
    while (a.length || b.length || temp) {
        // console.log(~~a.pop())
        temp += ~~a.pop() + ~~b.pop()
        // 保存当前结果
        res = (temp % 10) + res
        // 判断是否进位
        temp = temp > 9
    }
    return res
}
console.log(sumBigNumber(111111111111112222222222222,1111111239999999))
