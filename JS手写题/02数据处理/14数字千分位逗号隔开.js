// 数字无小数版本
function format1(n) {
    let num = n.toString()
    let len = num.length
    if (len <= 3) {
        // 无需处理
        return num
    } else {
        // 位数不是三的倍数，则需要手动添加第一个，
        let remainder = len % 3
        if (remainder > 0) {
            // 手动添加，的位置在remainder后
            // match返回符合条件的数组，用join连接
            return num.slice(0, remainder) + "," + num.slice(remainder, len).match(/\d{3}/g).join(",")
        } else {
            return num.match(/\d{3}/g).join(",")
        }
    }
}

let num = 12323232
console.log(format1(num)) //12,323,232

// 有小数：直接对小数进行保存
function format2(n) {
    let num = n.toString() // 转成字符串
    let decimals = ''
        // 判断是否有小数
    if (num.indexOf(".") > -1) {
        decimals = num.split('.')[1]
        // 取整数部分
        num = num.split('.')[0]
    }
    let len = num.length  // 整数部分长度
    let temp = ''
    decimals ? temp = '.' + decimals : temp
    if (len <= 3) {
        // 整数部分
        return decimals ? num + temp : num
    } else {
        let remainder = len % 3
        if (remainder > 0) { // 不是3的整数倍
            return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
        } else { // 是3的整数倍
            return num.slice(0, len).match(/\d{3}/g).join(',') + temp 
        }
    }
}
let decimals1 = 3333.33
let decimals2 = 333.33
let decimals3 = 33333
console.log(format2(decimals1)) //3,333.33
console.log(format2(decimals2)) //333.33
console.log(format2(decimals3)) //33,333