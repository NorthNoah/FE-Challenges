/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 维护一个双指针的滑动窗口裁切子字符串，Map(右指针字符，右指针位置)
  let res = 0
  let l = 0
  const map = new Map()
  // 右指针遍历字符串
  for (let r = 0; r < s.length; r++) {
      // 遇到重复的字符，则将左指针置为r的下一位
      //  && map.get(s[i])> l)
      if (map.has(s[r])) {
        // 防止l向左回退 
        l = Math(map.get(s[r]) + 1, l)
      } 

      // 计算比较当前res和上一次的res，取最大值
      console.log(r - l + 1)
      res = Math.max(res, r - l + 1)
      

      // 更新map中右指针的元素和位置
      map.set(s[r], r)
  }
  return res
};
const str = 'abba'
console.log(lengthOfLongestSubstring(str))