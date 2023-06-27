/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 暴力循环
function remove(nums, val) {
    let length = nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            for (let k = i + 1; k < length; k++) {
                nums[k - 1] = nums[k]
            }
            i--
            length--
        }
    }
    console.log(length)
    return length
}
// remove([1, 2, 3, 3, 3, 4, 5, 6], 3)

// 双指针
function remoeItem(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k++] = nums[i]
        }
    }
    nums.length = k;
    console.log(nums);
    return k
}
remoeItem([1, 2, 3, 3, 3, 4, 5, 6], 3);