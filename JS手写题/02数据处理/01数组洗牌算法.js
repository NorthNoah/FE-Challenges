const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 当前数字
function shuffle1(arr) {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i
		;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
	}
	return arr
}

function shuffle2(arr) {
	const res = []
	while (arr.length > 0) {
		const randomIndex = Math.floor(Math.random() * arr.length)
		res.push(arr[randomIndex])
		arr.splice(randomIndex, 1)
	}
    return res
}
console.log(shuffle1(arr))
console.log(shuffle2(arr))
