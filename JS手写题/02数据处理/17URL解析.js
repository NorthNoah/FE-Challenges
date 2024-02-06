// let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/

// function parseParam(url) {
//     const paramStr = /.+\?(.+)$/.exec(url)[1]
//     console.log(paramStr)
//     const paramArr = paramStr.split('&')
// }
// parseParam(url)


let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

let newUrl = decodeURIComponent(url)
function parseParam(url){
    const queryString = url.split('?')[1]
    console.log(queryString)
    const params = new URLSearchParams(queryString)
    console.log(params)
    const parsedParams = {}
    for(let [key,value] of params.entries()){
        // 对键值对进行处理
        let pattern = /^\d+$/
        if(value === ''){
            value = true
        }else if (pattern.test(value)){
            value = Number(value)
        }
        if(parsedParams[key]){
            if(Array.isArray(parsedParams[key])){ //已经有值，且是数组
                parsedParams[key].push(value)
            }else{
                parsedParams[key] = [parsedParams[key],value] //已经有单个值
            }
        }else{
            parsedParams[key] = value
        }
    }
    return parsedParams
}
console.log(parseParam(url));
// let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';


/* 结果
{ user: 'anonymous',
  id: [ 123, 456 ], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
  city: '北京', // 中文需解码
  enabled: true, // 未指定值得 key 约定为 true
}
*/
function parseUrl(url) {
  let urlStr = url.split('?')[1]
  let urlObj = new URLSearchParams(urlStr)
  let res = {}
  for (let [key, val] of urlObj.entries()) {
    if (/^[0-9]+$/.test(val)) {
      val = Number(val)
    } else if (val === '') {
      val = true
    }
    // 处理归类逻辑
    // key已经存在
    if (res[key]) {
      if (Array.isArray(res[key])) { // val已经是数组
        res[key].push(val)
      } else {
        res[key] = [res[key], val] // val为单元素
      }
    } else { // key不存在
      res[key] = val
    }
  }
  return res
}
console.log(parseUrl(url))
