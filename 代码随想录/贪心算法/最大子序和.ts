/**
 * 给定一个整数数组nums，找到一个具有最大和的连续子数组(子数组最少包含一个元素)，返回其最大和
 * 输入： [-2,1,-1,4,-1,2,1,-5,4]
 * 输出： 连续子数组[4,-1,2,1]的和最大，为6
 */

/**
 *
 * @param  贪心算法，只要前面的和是大于等于0的，就可以保证这个数组是正反馈
 * @returns
 */
const maxChildren = (nums: number[]): number => {
  let result: number = -Infinity;
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= result) {
      result = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return result;
};
