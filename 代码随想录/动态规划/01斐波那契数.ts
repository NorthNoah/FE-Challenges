namespace A {
  /**
   * 斐波那契数通常用F(n)表示，形成的序列称为斐波那契数列。该数列由0和1开始，后面的每一项数字都是前面两项数字的和。
   * 也就是:F(0)=0,F(1)=1F(n)=F(n-1)+F(n-2),其中n>1，给你n，请计算F(n)
   */

  const guihua = (n: number): number => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let startArr: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      startArr.push(startArr[1] + startArr[0]);
      startArr.shift();
    }
    let result: number = startArr[0] + startArr[1];
    return result;
  };
  guihua(2);
}

/**对简单题目使用动态规划，初步认识动态规划五部曲
 * 1.确定dp数组以及下标的含义
 *   dp[i]的定义为：第i个数的斐波那契数值是dp[i]
 * 2.确定递推公式
 *   题目已经将递推公式给出: dp[i] = dp[i - 1] + dp[i - 2]
 * 3.dp数组如何初始化
 *   题目已给出:
 *       dp[0] = 0
 *       dp[1] = 1
 * 4.确定遍历顺序
 *   从递推公式dp[i] = dp[i - 1] - dp[i - 2]中可看出，dp[i]是依赖dp[i - 1]和dp[i-2]，那么遍历的顺序一定是从前到后遍历的
 * 5.举例推导dp数组
 *   本题当n=10的时候，dp数组应该是如下的数列:[0,1,1,2,3,5,8,13,21,34,55]
 */
