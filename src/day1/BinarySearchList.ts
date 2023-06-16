export default function bs_list(haystack: number[], needle: number): boolean {
    // get lo
    let l = 0;
    // get high
    let h = haystack.length - 1;
    while (l <= h) {
        let mid = Math.floor(l + (h - l) / 2);
        if (haystack[mid] === needle) {
            return true;
        }
        if (haystack[mid] < needle) {
            l++;
        }
        if (haystack[mid] > needle) {
            h--;
        }
    }
    return false;
    // function to check if target is our answer, lower, or higher
}

/**
 * sorting list takes O(nlog n)
 * Binary Search  takes O(log n)
 */
