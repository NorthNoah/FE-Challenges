function twoSplit (nums, target) {
  let left = 0
  let right = nums.length - 1
  let middle = Math.floor((left + right) / 2)
  while (left <= right) {
    // target小于中间值，缩小右区间
    if (target < nums[middle]) {
      right = middle
      middle = Math.floor((right - left) / 2)
    } else if (target > nums[middle]) {
      left = middle
      middle = Math.floor((right - left) / 2)
    } else if (target === nums[middle]) {
      return middle
    }
  }
  return false
}