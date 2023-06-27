/**
 * 1. 确定dp数组及其下标的含义:
 *    dp[i]: 达到第i个楼层的最低花费
 * 2. 确定递推公式
 *    dp[i] = min(dp[i-1] + cost[i - 1],dp[i - 2] + cost[i - 2])
 * 3. dp数组如何初始化
 *    dp[0] = 0
 *    dp[0] = 0
 * 4. 确定遍历顺序
 *    从前往后
 * 5. 举例推导dp数组
 *
 */

/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
 * 请你计算并返回达到楼梯顶部的最低花费。
 */
const small = (cost: number[]): number => {
  const dp: number[] = [];
  const length = cost.length;
  dp[0] = 0;
  dp[1] = 0;
  for (let i = 2; i <= length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[length];
};
