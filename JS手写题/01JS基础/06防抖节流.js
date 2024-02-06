// 防抖-多次变最后一次；节流-多次变每隔一段时间执行
// 防抖debounce
// 防止多次重复提交，只执行最后一次，如搜索联想词功能，表单验证提交
function debounce(fn, delay) {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        setTimeout(() => {
            // 改变指向
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}


// 封装防抖hook，使得某个值在delay中只执行一次
const useDebounceHook = (value, delay) => {
    // 将原先value转化为组件内部状态
    const [debounceValue, setDebounceValue] = useState(value)
    // 在useEffect中用setTimeout调用
    useEffect(() => {
        let timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])
    return debounceValue
}

// 测试用例：对搜索框使用防抖hook
const [text, setText] = useState('')
const debounceText = useDebounceHook(text, 2000)
useEffect(() => {
    console.log("change:", debounceText)
}, [debounceText])

function onChange(evt) {
    setText(evt.target.value)
}

// 节流throttle
// 用于一段时间内执行一次
// 拖拽（位置变动触发）；缩放（窗口resize）：动画（多次触发动画）
function throttle (fn, delay) {
    // 返回时间戳毫秒数
    let curTime = Date.now()
    return function (...args) {
        let nowTime = Date.now()
        if (nowTime - curTime >= delay) {
            fn.apply(this, args)
            curTime = Date.now()
        }
    }
}
// 或者也可以在timer存在时return


function debounce (fn, delay) {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        } else {
            setTimeout(() => {
                fn.apply(this, args)
            }, delay)
            timer = null
        }
    }
}
 function throttle (fn, delay) {
    let curTime = Date.now()
    return function (...args) {
        let nowTime =  Date.now()
        if (nowTime - curTime >= delay) {
            fn.apply(this, args)
            curTime = Date.now()
        }
    }
 }

// 
function debounce (fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, delay)
    }
}

