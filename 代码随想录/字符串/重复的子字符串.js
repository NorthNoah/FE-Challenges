// 方法一：移动匹配


// 方法二：KMP：当一个字符串是由重复子串组成对的，最长相等前后缀不包含的子串就是最小重复子串

// 实现next数组
function getNext(str) {
    let next = [];
    let j = 0;
    next.push(j);

    for (let i = 1; i < str.length; i++) {
        while (j > 0 && str[i] !== str[j]) {
            j = next[j - 1];
        }
        if (str[i] === str[j]) {
            j++;
        }
        next.push(j);
    }
    return next;
}

const getRepeatString = (str) => {
    if (str.length === 0) {
        return false;
    }
    let next = getNext(str);
    if (next[next.length - 1] !== 0 && str.length % (str.length - next[next.length - 1]) === 0)
        return true;
    return false;
}