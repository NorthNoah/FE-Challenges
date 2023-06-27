const reverseString = (str) => {
    let last = str.length - 1;
    let start = 0;
    while (start < last) {
        let temp = str[last];
        str[last] = str[start];
        str[start] = temp;
        start++;
        last--;
    }
    console.log(str);
    return str;
}
reverseString(['a', 'b', 'd', 'e', 'f'])