/**
 * 给定一个非负整数数组，a1,a2,......an,和一个目标数，S。现在你有两个符号+和-。对于数组中的任意一个整数，你都可以从+或-中选择一个符号添加在前面
 * 返回可以使最终数组和为目标数S的所有添加符号的方法数
 * 1. 初始化dp数组
 *    dp[i][j]:从下标1-i的元素中任意取，放入容量为j的背包，表示所有添加符号的方法数
 * 2. 确定dp数组的推导公式
 *    dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
 * 3. 确定dp数组的初始值
 *    dp[i][0]:
 *    dp[0][j]:
 * 4. 确定dp数组的遍历方式
 *
 * 5. 举例推导dp数组
 *
 * 关键：如何转换为01背包模型
 */

function findTargetSumWays(nums: number[], target: number): number {
  // 把数组分成两个组合left, right。left + right = sum, left - right = target.
  const sum: number = nums.reduce((a: number, b: number): number => a + b);
  if ((sum + target) % 2 || Math.abs(target) > sum) return 0;
  const left: number = (sum + target) / 2;
  const dp: number[] = new Array(left + 1).fill(0);
  dp[0] = 1; // 装满容量为0的背包有1种方法（什么也不装）
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = left; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }
  console.log(dp[left]);
  return dp[left];
}
findTargetSumWays([1, 1, 1, 1, 1], 3);
