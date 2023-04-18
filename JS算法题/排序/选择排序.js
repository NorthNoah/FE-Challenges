function selectionSort(arr) {
    // 每轮排序后，i之前的数组都会变为有序,此时需要比较i位置上元素与后面的元素
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        // i + 1位置上开始查找,寻找[i+1, arr.length - 1]区间中最小元素的index
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minIndex = j
            }
        }
        // 交换i与最小数
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
}