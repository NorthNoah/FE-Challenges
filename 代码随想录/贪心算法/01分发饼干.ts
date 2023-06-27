namespace A {
  const giveCookie = (g: number[], s: number[]): number => {
    g.sort((a, b) => b - a); /** 从大到小 */
    s.sort((a, b) => a - b); /** 从小到大 */
    let max: number;
    let length: number = g.length;
    let mark: number = 0;
    for (let i = 0; i < length; i++) {
      max = g.shift()!;
      let length2 = s.length;
      for (let k = 0; k < length2; k++) {
        if (s[k] >= max) {
          mark++;
          s.splice(k, 1);
          break;
        }
      }
    }
    return mark;
  };
  giveCookie([10, 9, 8, 7], [5, 6, 7, 8]);
}
