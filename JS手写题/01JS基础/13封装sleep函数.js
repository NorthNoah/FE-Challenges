// 1.直接使用promise+then调用，可以链式调用，此时为异步任务无法阻塞同步任务
function sleep(time) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

function fnA() {
	console.log("A")
}
function fnB() {
	console.log("B")
}
function fnC() {
	console.log("C")
}

// sleep(1000).then(fnA)
// console.log("E")
// sleep(2000).then(fnB)
// console.log("G")
// sleep(3000).then(fnC)

// 2.async+await调用来阻塞代码，依次执行
async function sleepTest() {
    fnA()
    // 返回结果才会继续调用同步代码
	await sleep(1000)
	console.log("E")
    fnB()
	await sleep(1000)
    fnC()
	await sleep(1000)
	console.log("G")
}
// sleepTest()

function sleep2(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}
sleep2(10000).then(() => {
	console.log('dddddd')
})

async function sleepTest() {
	await sleep(1000)
}