let obj = {
  a: 1,
  b: 2,
  c: 3
}

obj[Symbol.iterator] = function* () {
  // 属性名的数组
  let keys = Object.keys(obj)
  // 返回[key, key对应的value]
  for (let key of keys) {
    yield [key, obj[key]]
  }
}

for ([key, value] of obj) {
  console.log([key, value])
}
