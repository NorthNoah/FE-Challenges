function someReverse(str, n) {
    function reverseWord(str, start, end) {
        let temp;
        while (start < end) {
            temp = str[start]
            str[start] = str[end]
            str[end] = temp
            start++
            end--
        }
    }
    let strArr = [...str]
    console.log(strArr)
    let length = str.length
    reverseWord(strArr, 0, n - 1)
    reverseWord(strArr, n, length - 1)
    reverseWord(strArr, 0, length - 1)
    console.log(strArr.join(''))
    return strArr.join('')
}
someReverse('abcdefgh', 3)