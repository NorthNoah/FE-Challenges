namespace A {
  /**如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为摆动序列。第一个差可能是正数或者负数。少于两个元素的序列也是摆动序列 */
  const wiggleMaxLength = function (nums) {
    if (nums.length <= 1) return nums.length;
    let result = 1;
    let preDiff = 0;
    let curDiff = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      curDiff = nums[i + 1] - nums[i];
      if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
        result++;
        preDiff = curDiff;
      }
    }
    return result;
  };
}
