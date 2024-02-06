let arr1 = [
  { "key": 1, "value": "Tom" },
  { "key": 1, "value": "Jack" },
  { "key": 2, "value": "Anna" }
]
function unique(arr) {
  let res = []
  let map = new Map()
  arr.forEach(item => {
    if (!map.has(item.key)) {
      res.push(item)
    }
    map.set(item.key, true)
  })
  return res 
}
console.log(unique(arr1))


function unique2(arr) {
  let res = []
  // 检测已有的res中是否存在key为当前key值的对象
  for (let i = 0; i < arr.length; i++) {
    let hasVal = res.find(item => item.key === arr[i].key)
    if (!hasVal) {
      res.push(arr[i])
    } 
  }
  return res 
}
console.log(unique2(arr1))


let arr2 = 
[
  {
    "key": 1,
    "value": "Tom",
    "children": [
      { "key": 4, "value": "John" },
      { "key": 4, "value": "Linda" }
    ]
  },
  { "key": 1, "value": "Jack" },
  { "key": 2, "value": "Anna", "children": [{ "key": 1, "value": "Jack" }] }
]

function unique3(arr) {
  let res = []
  let map = new Map()
  arr.forEach(item => {
    if (!map.has(item.key)) {
      // 处理子节点
      if (item.children) {
        item.children = unique(item.children)
      }
      res.push(item)
    }
    map.set(item.key, true)
  })
  return res 
}
console.dir(unique3(arr2), {depth:null})


// 根据value去重
let arr3 = [
  { key: "x", value: 2 },
  { key: "x", value: 2 },
  { key: "x", value: 3 }
]


function unique4 (arr) {
  let map = new Map()
  let res = []
  arr.forEach(item => {
    if (!map.has(item.value)) {
      res.push(item)
    }
    map.set(item.value, true)
  })
  return res 
}

console.log(unique4(arr3))

let arr4 = 
[
  {
    "key": "x",
    "value": 2,
    "children": [
      { "key": "x", "value": 4 },
      { "key": "x", "value": 4 }
    ]
  },
  { "key": "x", "value": 2 },
  { "key": "x", "value": 3 }
]

function unique5 (arr) {
  let map = new Map()
  let res = []
  arr.forEach(item => {
    if (!map.has(item.value)) {
      if (item.children) {
        item.children = unique5(item.children)
      }
      res.push(item)
    }
    map.set(item.value, true)
  })
  return res 
}
console.dir(unique5(arr4), {depth:null})