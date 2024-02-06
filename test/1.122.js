function myRace(promise, time) {
  let promise2 = new Promise(reject => {
    setTimeout(() => {
      reject('请求已经超时')
    }, time)
  })
  return Promise.race([promise, promise2])
}
let promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('请求成功')
  }, 1400)
})

console.log(myRace(promise, 1000).then(res => { console.log(res)} ))
