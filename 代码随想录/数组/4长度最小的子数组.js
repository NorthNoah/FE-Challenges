/**
 * @param {number[]} arr
 * @param {Int16Array} s
 * @returns {number[]} 
**/
// 先检查两位数字，再检查三位数字，一直到n位，
// 暴力循环
function minLength(arr, s) {
    const length = arr.length
    let subLength = 0
    let result = 0
    let count = 99999 // 最终的结果，为长度，同时也可作为比较值
    for (let i = 0; i < length; i++) {
        result = 0
        for (let j = i; j < length; j++) {
            result = result + arr[j]
            if (result >= s) {
                subLength = j - i + 1 // 子序列的长度
                count = count < subLength ? count : subLength
                break
            }
        }
    }
    console.log(count)
    return count
}
minLength([2, 3, 1, 2, 4, 3], 7)

// function minLength(arr, s) {
//     const length = arr.length
//     // for (let i = 1; i <= length; i++) {
//     for (let t = 0; t < length; t++) {
//         if (arr[t] > s) {
//             return arr[t].length
//         }
//         // for (let i = 0; i <= length; i++) {
//         let number = 0
//         let newArr = []
//         for (let j = 0; j <= t; j++) {
//             number = number + arr[t + j]
//             newArr.push(arr[t + j])
//             if (number >= s) {
//                 console.log(number)
//                 console.log(newArr)
//                 return newArr.length
//             }
//             // }
//         }
//     }
// }
minLength([2, 3, 1, 2, 4, 3], 7)





// function minLength(arr, s) {
//     const length = arr.length
//     for (let i = 0; i < length; i++) {
//         if (arr[i] > s) {
//             return arr[i].length
//         }
//         let number = arr[i]
//         let newArr = [arr[i]]
//         for (let j = i + 1; j < arr.length; j++) {
//             number = number + arr[j]
//             newArr.push(arr[j])
//             if (number > s) {
//                 console.log(number)
//                 console.log(newArr)
//                 return newArr.length
//             }
//         }
//     }
// }
// minLength([2, 3, 1, 2, 4, 3], 7)