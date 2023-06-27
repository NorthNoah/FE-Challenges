/**
 * @param {number} n
 * @returns {number[[]]} 
**/
// 循环不变量原则
function circle(n) {
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let loop = Math.floor(n / 2) // 循环次数
    let mark = 1 // 填充数值
    let startX = 0 // 控制起始位置
    let startY = 0 // 控制起始位置
    let fill = 1 // 控制每层填充个数
    while (loop--) {
        let x = startX, y = startY
        // 从左到右
        for (y; y < (startY + n - fill); y++) {
            arr[x][y] = mark
            mark++
        }
        // 从上到下
        for (x; x < (startX + n - fill); x++) {
            arr[x][y] = mark
            mark++
        }
        // 从右到左
        for (y; y > (startY); y--) {
            arr[x][y] = mark
            mark++
        }
        // 从下到上
        for (x; x > (startX); x--) {
            arr[x][y] = mark
            mark++
        }
        fill += 2
        startX++
        startY++
    }
    let middle = (n - 1) / 2
    // 奇数中间单独列出
    if (n % 2 !== 0) {
        arr[middle][middle] = n * n
    }
    console.log(arr)
    return arr
}
circle(7)