/**
 * 一个机器人位于一个m*n网格的左上角
 * 机器人每次只能向下或者向右移动一步。机器人试图到达网格的右下角
 * 现在考虑网格中有障碍物。那么从左下角到右下角将会有多少条不同的路径
 *
 * 1. 确定dp数组
 *    dp[i][j]: 在坐标(i,j)时的不同的路径条数
 * 2. 确定递归公式
 *    dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
 * 3. 初始化dp数组
 *    dp[i,0] = 1
 *    dp[0,j] = 1
 * 4. 确定遍历顺序
 *    从左到右依次遍历
 */

const diffPathPlus = (obstacleGrid: number[][]): number => {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  const dp: number[][] = new Array(obstacleGrid.length)
    .fill(0)
    .map((item) => new Array(n).fill(0));

  console.log(dp, "dp");
  /** &&obstacleGrid[i]使第一行第一次出现1后面的所有元素都为0 */
  for (let i = 0; i < m && obstacleGrid[i]; i++) {
    dp[i][0] = 1;
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        continue;
      }
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  console.log(dp[m - 1][n - 1]);
  return dp[m - 1][n - 1];
};

diffPathPlus([[1, 0]]);
