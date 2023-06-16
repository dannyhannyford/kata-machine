export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            console.log(`arr[${i}]:${arr[i]} arr[${j}]:${arr[j]}`);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}
// every iteration
// largest item will go to the end

// sum of numbers between a range
// ((N+1)N)/2 -> n^2 + n -> n^2

// immutability
// Pros: easy to use
//  cons: space, replicating space
