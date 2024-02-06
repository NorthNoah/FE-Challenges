function red() {
  console.log('red')
}

function yellow() {
  console.log('yellow')
}

function green() {
  console.log('green')
}


const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      } else if (light === 'yellow') {
        yellow()
      } else if (light === 'green') {
        green()
      }
      resolve()
    }, timer)
  })
}

const taskRunner = async () => {
  while (true) {
    await task(3000, 'red')
    await task(1000, 'yellow')
    await task(2000, 'green')
  }  
}

taskRunner()