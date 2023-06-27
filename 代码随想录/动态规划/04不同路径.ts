/**
 * 一个机器人位于一个m*n的网格的左上角。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的左下角。
 * 问总共有多少种不同的路径
 *
 * 1. 确定dp数组
 *    dp[i][j]:到达点(i,j)的不同路径的条数
 * 2. 确定递推公式
 *    dp[i][j] = dp[i][j-1] + dp[i-1][j]
 * 3. dp数组如何初始化
 *    dp[i][1] = 1
 *    dp[1][j] = 1
 * 4. 遍历方式
 *    从左到右一层一层遍历
 * 5. 举例推导
 */

const diffPath = (m: number, n: number): number => {
  const dp: number[][] = new Array(m).fill(0).map((item) => []);
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[m - 1][n - 1]);
  return dp[m - 1][n - 1];
};
diffPath(3, 7);
