function ajax(url, method) {
    // 1.返回promise对象
    return new Promise((resolve, reject) => {
        // 2.新建xhr对象,打开链接
        const xhr = new XMLHttpRequest()
        xhr.open(url, method, true)
        // 3.编写监听状态变化的逻辑
        xhr.onreadystatechange = function() {
            // 请求发送成功
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // 成功状态-返回响应text
                    resolve(xhr.responseText)
                } else if (xhr.status === 404) {
                    // 失败状态-返回404Error
                    reject(new Error('404'))
                }
            } else {
                reject('请求数据失败')
            }
        }
        xhr.send(null)
    })
}

let hotSuggests = ajax("http://codercba.com:1888/api/home/hotSuggests", "GET")
console.log(hotSuggests)