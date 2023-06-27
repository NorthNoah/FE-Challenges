/**
 * 有一堆石头，每块石头的重量都是正整数。每一回合从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为x和y，且x <= y。那么粉碎的结果可能如下：
 * 如果 x==y,那么两块石头都会被粉碎
 * 如果x !== y，那么重量为x的石头将会完全粉碎，而重量为y的石头新重量为y-x
 * 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回0
 * 思路：尽量让这个数组分为总和相同的两堆
 */

namespace A {
  const lastWeight = (num: number[]): number => {
    /**求和 */
    let sum = num.reduce((total, curValue) => {
      return total + curValue;
    });

    /**可装的最大重量 */
    let maxSize = Math.floor(sum / 2);
    let length = num.length;
    /**背包的重量数组 */
    let weightArr = num.slice();

    /**背包的价值数组 */
    let valueArr = num.slice();

    let dp: number[][] = new Array(length)
      .fill(0)
      .map((item) => new Array(maxSize + 1).fill(0)); // 这里为maxSize+1是因为背包重量也需要从0开始，所以会多一个表示0重量的格子

    // console.log(dp);
    for (let j = weightArr[0]; j <= maxSize; j++) {
      dp[0][j] = valueArr[0];
    }
    // console.log(dp);

    /**遍历方式and递推公式 */
    for (let i = 1; i < length; i++) {
      for (let j = 0; j <= maxSize; j++) {
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

    console.log(dp, "dp");
    let res = dp[length - 1][maxSize];
    if (res === sum / 2) return 0;
    else {
      console.log(sum - dp[length - 1][maxSize] - dp[length - 1][maxSize]);
      return sum - dp[length - 1][maxSize] - dp[length - 1][maxSize];
    }
  };
  let test = [2, 7, 4, 1, 8, 1];
  lastWeight(test);
}
