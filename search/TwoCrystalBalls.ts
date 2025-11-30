/**
 * Given 2 Crystal balls, find the height at which the balls break
 * 
 * This problem models finding the first `true` in a boolean array where querying too high may "break" a resource. The goal is to minimize worst-case checks given two usable probes.
 * 
 * Linear search works but can be slow: $O(n)$ checks in the worst case.
 * 
 * Binary search may break a ball early, forcing a linear scan with the remaining ball over half the array: worst-case cost becomes $O(n)$.
 */

export default function two_crystal_balls(breaks: boolean[]): number {

    const jumps = Math.floor(Math.sqrt(breaks.length));

    // find the first break
    let i = jumps;
    for (; i < breaks.length; i += jumps) {
        if (breaks[i]) {
            break;
        }
    }

    // walk back one increment
    i -= jumps;
    // walk frwards
    for (let j = 0; j < jumps && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}