/**
 * 给定一个正整数n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。返回你可以获得的最大乘积
 * 1. 确定dp数组
 *    dp[i]: 正整数为i时的最大乘积
 * 2. 确定递推公式
 *    dp[i] = max{dp[i], j*(i-j), j*(dp[i-j])}
 * 3. 初始化dp数组
 *    dp[2] = 1
 * 4. 确定遍历顺序
 *    从前往后
 */

const numSplit = (n: number): number => {
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i - 1; j++) {
      dp[i] = Math.max(dp[i], (i - j) * j, j * dp[i - j]);
      console.log(dp[i]);
    }
  }

  console.log(dp[n]);
  return dp[n];
};
numSplit(10);
