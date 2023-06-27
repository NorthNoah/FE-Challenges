/**
 * 有n件物品和一个最多能背重量为w的背包。第i件物品的重量是weight[i],得到的价值是value[i]。每件物品只能用一次，求解将哪些物品装入背包里物品价值总和最大
 *
 * 动态规划解法：
 *
 * 1. 确定dp数组
 *    dp[i][j]: 表示从下标为[0---i]的物品里任意取，放进容量为j的背包，价值总和最大是多少
 *
 * 2. 确定递归公式
 *    分为不放物品和放置物品，因此需要判断这两个中哪个最大
 *    dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
 *
 * 3. dp数组初始化
 *    由递归公式可以看出，dp[i][j]是由左上方数值推导出来的，那么其他下标初始值为什么都可以，因为都会被覆盖
 *
 * 4. 遍历方式
 *    有两个维度：物品与背包重量
 *    这里采取先遍历物品，再遍历背包重量，其实无论先遍历哪一个都可以
 *
 * 5. 推导dp数组
 */

function testWeightBagProblem(
  weight: number[],
  value: number[],
  size: number
): number {
  /**
   * dp[i][j]: 前i个物品，背包容量为j，能获得的最大价值
   * dp[0][*]: u=weight[0],u之前为0，u之后（含u）为value[0]
   * dp[*][0]: 0
   * ...
   * dp[i][j]: max(dp[i-1][j], dp[i-1][j-weight[i]]+value[i]);
   */
  const goodsNum: number = weight.length;
  const dp: number[][] = new Array(goodsNum)
    .fill(0)
    .map((_) => new Array(size + 1).fill(0));

  /**初始化 */
  for (let i = weight[0]; i <= size; i++) {
    dp[0][i] = value[0];
  }

  for (let i = 1; i < goodsNum; i++) {
    for (let j = 1; j <= size; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
      }
    }
  }
  return dp[goodsNum - 1][size];
}
// test
const weight = [1, 3, 4];
const value = [15, 20, 30];
const size = 4;
console.log(testWeightBagProblem(weight, value, size));
