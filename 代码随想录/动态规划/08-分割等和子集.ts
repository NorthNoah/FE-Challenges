/**
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得这两个子集的元素和相等。
 * 注意点：本题的每个元素的数值既是重量，也是价值
 * 1. 确定dp数组
 *    dp[i][j]: 从下标0-i的元素中，放入容量为j的背包，所背的物品价值
 * 2. 确定递归公式
 *    dp[i][j] = max(dp[j-1], dp[j-value(i)]+value[i])
 * 3. dp数组初始化
 *    dp[0][j] = arr[0]
 *    dp[i][0] = 0
 * 4. 确定遍历顺序
 *    两层循环，先遍历元素，再遍历容量
 * 4. 推导dp数组
 */

namespace A {
  function canPartition(nums: number[]): boolean {
    /**
            weightArr = nums;
            valueArr = nums;
            bagSize = sum / 2; (sum为nums各元素总和);
            按照0-1背包处理
         */
    const sum: number = nums.reduce((pre, cur) => pre + cur);
    console.log(sum);
    if (sum % 2 === 1) return false;
    const bagSize: number = sum / 2;

    /** 背包的重量数组 */
    const weightArr: number[] = nums;

    /** 背包的价值数组 */
    const valueArr: number[] = nums;

    const goodsNum: number = weightArr.length;

    /** 定义dp数组 */
    const dp: number[][] = new Array(goodsNum)
      .fill(0)
      .map((_) => new Array(bagSize + 1).fill(0));
    console.log(dp, "dp");

    /** 初始化dp数组 */
    for (let i = weightArr[0]; i <= bagSize; i++) {
      dp[0][i] = valueArr[0];
    }
    console.log(dp, "初始化后的dp");

    /** 先遍历重量，再遍历价值 */
    for (let i = 1; i < goodsNum; i++) {
      for (let j = 0; j <= bagSize; j++) {
        if (j < weightArr[i]) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = Math.max(
            dp[i - 1][j],
            dp[i - 1][j - weightArr[i]] + valueArr[i]
          );
        }
      }
    }
    return dp[goodsNum - 1][bagSize] === bagSize;
  }
  canPartition([9, 2, 3, 4, 6]);
}
