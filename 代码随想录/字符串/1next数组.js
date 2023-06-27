export const getNext = (str) => {
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