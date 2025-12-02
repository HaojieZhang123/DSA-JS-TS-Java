function binarySearch(haystack, needle) {
    let low = 0;
    let high = haystack.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midVal = haystack[mid];
        if (midVal === needle) return true;
        if (midVal < needle) low = mid + 1;
        else high = mid - 1;
    }
    return false;
}

let haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let needle;
// ask user for needle
console.log("enter needle value: ");
needle = parseInt(process.stdin.read());

console.log(binarySearch(haystack, needle));