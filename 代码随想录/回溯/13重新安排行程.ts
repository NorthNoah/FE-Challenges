namespace A {
  /** 给定一个机票的字符串二维数组，子数组的两个成员分别表示飞机出发和降落的机场地点，对改行程进行重新规划排序。
   * 所有这些机票都属于一个从JFK(肯尼迪国际机场)出发的先生，所以该行程必须从JFK开始
   * 如果存在多种有效的行程，请你按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
   *  所有的机场都用三个大写字母表示（机场代码）。
   * 假定所有机票至少存在一种合理的行程。
   * 所有的机票必须都用一次 且 只能用一次。 */
  const reArrange = (tickets: string[][]): string[] => {
    type TicketsMap = {
      [index: string]: Map<string, number>;
    };
    tickets.sort((a, b) => (a[1] < b[1] ? -1 : 1));
    const ticketMap: TicketsMap = {};
    for (const [from, to] of tickets) {
      if (ticketMap[from] === undefined) {
        ticketMap[from] = new Map();
      }
      ticketMap[from].set(to, (ticketMap[from].get(to) || 0) + 1);
    }
    const resRoute = ["JFK"];
    const blockTracking = (
      ticketNum: number,
      ticketMap: TicketsMap,
      route: string[]
    ): boolean => {
      if (route.length === ticketNum + 1) return true;
      const targetMap = ticketMap[route[route.length - 1]];
      if (targetMap !== undefined) {
        for (const [to, count] of targetMap.entries()) {
          if (count > 0) {
            route.push(to);
            targetMap.set(to, count - 1);
            if (blockTracking(ticketNum, ticketMap, route) === true)
              return true;
            targetMap.set(to, count);
            route.pop();
          }
        }
      }
      return false;
    };

    blockTracking(tickets.length, ticketMap, resRoute);
    console.log(resRoute);
    return resRoute;
  };
  reArrange([
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ]);
}
