const temp = (s) => {
    const strArr = [...s];
    let mark = 0;
    for (let item of strArr) {
        if (item === ' ') {
            mark = mark + 1;
        }
    }
    let left = strArr.length - 1;
    let right = strArr.length + mark * 2 - 1;
    while (left >= 0) {
        if (strArr[left] === ' ') {
            strArr[right--] = '0';
            strArr[right--] = '2';
            strArr[right--] = '%';
        } else {
            strArr[right--] = strArr[left--];
        }
    }
    return strArr.join('');
}