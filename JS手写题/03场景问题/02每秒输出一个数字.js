function task(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i)
      resolve()
    }, i * 1000)
  })
}
async function taskRunner() {
  for (let i = 0; i <= 10; i++) {
    await task(i)
  }
}
taskRunner()

