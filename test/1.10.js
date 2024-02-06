async function async1() {
  console.log('async1 start')
  var a = await async2()
  console.log(a)
}


async function async2() {
  console.log('async2')
}


console.log('script start')


setTimeout(() => {
  console.log('setTimeout')
}, 0)


async1()


new Promise(resolve => {
  console.log('promise1')
  resolve()
}).then(function() {
  console.log('promise2')
})

console.log('script end')
