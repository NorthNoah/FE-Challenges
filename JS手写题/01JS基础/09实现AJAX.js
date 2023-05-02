function ajax(url, method) {
	let xhr = new XMLHttpRequest()
	// 创建Http请求
	xhr.open(method, url, true)
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                handle(this.response)
            } else {
                console.error(this.statusText)
            }
        }
        // 
    }
    // 设置错误监听函数
    xhr.onerror = function() {
        console.error(this.statusText)
    }
    // 设置响应的数据类型和请求头信息
    xhr.responseType = "json"
    xhr.setRequestHeader("Accept", "application/json")
    // 发送http请求
    xhr.send(null)
}
