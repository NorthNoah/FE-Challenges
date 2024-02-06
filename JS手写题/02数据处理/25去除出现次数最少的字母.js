let str = 'abbbbbbbcccccccc'
function deleteChar(str) {
  let obj = {}
  for (let c of str) {
    if (obj.hasOwnProperty(c)) {
      obj[c]++
    } else {
      obj[c] = 1
    }
  }
  let minTimes = Math.min(...Object.values(obj))
  let minChar = ''
  for (let c in obj) {
    if(obj[c] === minTimes) {
      minChar = c
    }
  }
  console.log(minChar)
  res = str.replace(minChar, '')
  return res 
}

console.log(deleteChar(str))