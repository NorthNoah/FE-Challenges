// 模拟Object.create：将构造函数的prototype指向指定proto，然后new Fn()自动绑定
function ObjectCreate(o) {
    function Fn() {}
    Fn.prototype = o
    // 自动绑定newObj = Fn.prototype = proto
    return new Fn()
}

