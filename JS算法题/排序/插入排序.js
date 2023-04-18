// 插入已经排序好的数组中,默认第一个数字已经有序
for (let i = 1; i < arr.length; i++) {
    target = i
    // 将已排序好的数组从后向前遍历,寻找合适的位置插入,
    for (let j = i - 1; j >= 0; j++) {
        if (arr[target] < arr[j]) {
            [arr[target],arr[j]] = [arr[j], arr[target]]
            target = j
        } else {
            break
        }

    }
}