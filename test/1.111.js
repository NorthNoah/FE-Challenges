let arr = [1, 2, [ 3, 4, [ 5, 6 ] ]]

function flat(arr) {
  return arr.reduce((total, cur) => {
    if (Array.isArray(cur)) {
      return total = total.concat(flat(cur))
    } else {
      return total = total.concat(cur)
    }
  }, [])
}

function flat2(arr) {
  let res = []
  for (let item of arr) {
    if (Array.isArray(item)) {

    } else {
      res.push(item)
    }
  }
}
console.log(flat(arr))