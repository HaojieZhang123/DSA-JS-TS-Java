const twoCrystalBalls = (breakingPoint) => {
    const jumps = Math.floor(Math.sqrt(breakingPoint.length));
    console.log("jump amount: " + jumps)

    // jump until the first ball breaks
    let i = jumps;
    for (; i < breakingPoint.length; i += jumps) {
        if (breakingPoint[i]) {
            console.log("Broken!");
            break;
        }
        console.log("Not broken");
    }

    // walk back one increment
    i = i - jumps + 1;
    // check one by one
    for (j = 0; j < jumps && i < breakingPoint.length; i++, j++) {
        if (breakingPoint[i]) {
            console.log("broken at: " + i)
            return i;
        }
        console.log("current position: " + i);
    }

    return -1;
}

const breakingPoint = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
console.log(twoCrystalBalls(breakingPoint))