/**
 * If the array is sorted, compare the target to the middle element and eliminate half the search space each step:
 * 
 * - If middle == target -> found
 * - If middle < target -> search right half
 * - If middle > target -> search left half
 * 
 * Repeating this halves the search space each step.
 */

export default function binarySearch(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    while (lo <= hi) {
        const m = Math.floor(lo + (hi - lo) / 2); // avoids overflow
        const v = haystack[m];
        if (v === needle) return true;
        if (v < needle) lo = m + 1;
        else hi = m - 1;
    }

    return false;
}