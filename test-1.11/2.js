function throttle(func, time) {
  let now = Date.now()
  return function(...args) {
    let cur = Date.now()
    if (cur - now >= time) {
      func(...args)
      now = Date.now()
    }
  }
}