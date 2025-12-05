const linearSearch = (haystack, needle) => {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle)
            return haystack[i];
    }
    return -1;
}


let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 31, 13, 56];
let needle = 12

console.log(linearSearch(haystack, needle));