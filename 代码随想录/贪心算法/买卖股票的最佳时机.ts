/**
 * 给定一个数组，它的第i个元素时一支给定股票第i天的价格
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多地交易(多次买卖一支股票)
 * 注意：你不能同时参与多笔交易(必须在再次购买前出售掉之前的股票)
 */

/** 思路：利润可分解，可以分解为一天一天的利润，然后只取正值 */
const sale = (nums: number[]): number => {
  if (nums.length === 1) {
    return 0;
  }

  let result: number[] = []; // 统计两两相减的结果
  let helpArr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    helpArr.push(nums[i]);
    if (helpArr.length == 2) {
      result.push(helpArr[1] - helpArr[0]);
      helpArr.shift();
    }
  }
  console.log(result);
  result = result.filter((item) => item > 0);
  console.log(result);
  let sum = 0;
  result.forEach((item) => {
    sum += item;
  });
  console.log(sum);
  return sum;
};
sale([7, 1, 5, 3, 6, 4]);
