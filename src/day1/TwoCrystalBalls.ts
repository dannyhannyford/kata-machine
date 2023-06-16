export default function two_crystal_balls(breaks: boolean[]): number {
    // set result
    let firstBallBroken = false;
    // set interval
    let interval = Math.floor(Math.sqrt(breaks.length));
    let currFloor = 0;
    // while no ball has broken
    while (!firstBallBroken && currFloor < breaks.length - 1) {
        // jump another interval
        currFloor += interval;
        if (breaks[currFloor]) {
            firstBallBroken = true;
        }
    }

    // if broken
    // increment by 1 starting at beginning of interval
    let floorCeil = currFloor;
    currFloor -= interval;
    for (let i = currFloor; i < floorCeil && i < breaks.length; i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
