/**
 * @param {number[]} nums
 * @param {number[]} doubleNum
    */
// 暴力循环
function double(nums) {
    let newArr = []
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[i] * nums[i])
    }
    // 冒泡排序
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[j - 1]) {
                let temp = newArr[j - 1]
                newArr[j - 1] = newArr[j]
                newArr[j] = temp
            }
        }
    }
    console.log(newArr)
    return newArr
}
double([-3, -1, 2, 4, 5])

// 双指针法

