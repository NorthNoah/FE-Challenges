// 比较当前元素和下一个元素，如果当前元素比下一个元素大，则向上冒泡，最后一个数为本组最大的数；
// 下一次循环继续上面操作，不循环已经排序好的数
// 优化：当不再冒泡时，说明排序完成，停止循环
function bubbleSort(arr) {
    let complete = true
    for (let i = 0; i < arr.length; i++) {
        // 第i轮循环，说明已经排好了i个数字；不需要和自己比较，所以需要-1
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                complete = false
            }
        }
    }
    if (complete) {
        break
    }
    return arr
}