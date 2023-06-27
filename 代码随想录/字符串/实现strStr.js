/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
    if (needle.length === 0)
        return 0;

    // 得到next数组
    const getNext = (needle) => {
        let next = [];
        let j = 0;
        next.push(j);

        for (let i = 1; i < needle.length; i++) {
            console.log(i, 'i');
            while (j > 0 && needle[i] !== needle[j]) {   // 
                j = next[j - 1];
                console.log(j, 'next[j-1]');
            }
            if (needle[i] === needle[j]) {
                j++;
                console.log(j, 'j');
            }
            next.push(j);
            console.log(next, 'next');
        }

        return next;
    }

    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; ++i) {
        while (j > 0 && haystack[i] !== needle[j])
            j = next[j - 1];
        if (haystack[i] === needle[j])
            j++;
        if (j === needle.length) {
            console.log(i - needle.length + 1);
            return (i - needle.length + 1);
        }
    }

    console.log(-1);
    return -1;
};
strStr('asfaeasfasf', 'asfase');