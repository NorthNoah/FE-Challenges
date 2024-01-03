// test
function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  // 取出数组中的基准元素
  let pivot = arr[pivotIndex]
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue
    }
    if (arr[i] <= pivot) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}