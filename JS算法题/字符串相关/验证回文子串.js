var isPalindrome = function(s) {
   // 1.只考虑字母和数字字符-如何排除空格标点等干扰?应该先处理还是遍历时跳过?或转换为ASCII?
    // 2.忽略字母大小写的api是什么
    // 3.回文验证:左右指针,但如何忽略其对s进行小写处理和正则匹配
  let valid = s.toLowerCase().match(/[a-z0-9]+/g)
  if (!valid) {
    return true
  }
  let str = valid.join('')
  let left = 0
  let right = str.length - 1
  while(left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
};