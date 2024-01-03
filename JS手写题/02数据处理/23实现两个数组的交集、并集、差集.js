// 并集计算-Set方法
function union (arr1, arr2) {
  const set = new Set()
  arr1.forEach(val => {
    set.add(val)
  });
  arr2.forEach(val => {
    set.add(val)
  });
  let res = Array.from(set)
  return res
}
// 简化-引入扩展运算符
function union2 (arr1, arr2) {
  const set = new Set([...arr1, ...arr2])
  let res = [...set]
  return res
}
console.log(union2([1,2,2,3,4], [4,3,8,11]))

// 交集计算-Set模拟
// function intersection (arr1, arr2) {
//   const tempSet = new Set() //确保交集arr没有重复
//   const set1 = new Set(arr1) //对arr1去重
//   arr2.forEach(val => {
//     if (set1.has(val)) {
//       tempSet.add(val)
//     }
//   })
//   return [...tempSet]
// }

function intersection (arr1, arr2) {
  // 去重
  const set1 = new Set(arr1)
  const set2 = new Set(arr2) 
  // 遍历set1转换后的数组，筛选
  const res = [...set1].filter(x => set2.has(x))
  return res
}
console.log(intersection([3,3,3,4,4,4,8], [4,3,4,8,11]))

// 求差集-Set模拟
// function difference (arr1, arr2) {
//   const tempSet = new Set()
//   const set2 = new Set(arr2)
//   arr1.forEach(val => {
//     if (!set2.has(val)) {
//       tempSet.add(val)
//     }
//   })
//   return [...tempSet]
// }

function difference (arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const res  = [...set1].filter(val => !set2.has(val))
  return res
}
console.log(difference([1,2,3,4], [4,3,8,11]))
