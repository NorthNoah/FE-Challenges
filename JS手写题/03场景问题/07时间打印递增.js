function task(n) {
  let count = 1
  function step() {
    if (count === n) {
      return
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(count)
        count++
        resolve()
      }, count * 1000)
    }).then(step)
  }
  step()
}
// task(10)


// function taskRunner(n) {
//   for (let i = 1; i < )

// }


function delayLog(str) {
  return new Promise((resolve) => {
      setTimeout(() => {
        console.log(str);
        resolve()
      }, 1000);
  })
}
async function time() {
  for (let i = 1; i <= 5; i++) {
      await delayLog(i)
  }
}
time();