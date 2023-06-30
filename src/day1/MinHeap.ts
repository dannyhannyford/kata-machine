export default class MinHeap {
    public length: number;
    private heap: number[];

    constructor(array: number[]) {
        this.length = 0;
        this.heap = this.buildHeap(array));
    }

    buildHeap(array: number[]): number[] {
        let parent_idx = Math.floor((array.length - 1)/2);
        for(let i = parent_idx; i >= 0; i--) {
            this.heapifyDown(i, array.length -1, array);
        }
        this.length = array.length;
        return array;
    }

    heapifyDown(curr_idx: number, end_idx: number, heap: number[]): void {
        let child_one_idx = curr_idx * 2 + 1;
        while (child_one_idx <= end_idx) {
            const child_two_idx =
                curr_idx * 2 + 2 <= end_idx ? curr_idx * 2 + 2 : -1;
            let idx_to_swap;
            if (
                child_two_idx !== -1 &&
                heap[child_two_idx] < heap[child_one_idx]
            ) {
                idx_to_swap = child_two_idx;
            } else {
                idx_to_swap = child_one_idx;
            }
            if (heap[idx_to_swap] < heap[curr_idx]) {
                this.swap(curr_idx, idx_to_swap, heap);
                curr_idx = idx_to_swap;
                child_one_idx = curr_idx * 2 + 1;
            } else {
                return;
            }
        }
    }

    heapifyUp(curr_idx: number, heap: number[]): void {
        let parent_idx = Math.floor((curr_idx - 1) / 2);
        while (curr_idx > 0 && heap[curr_idx] < heap[parent_idx]) {
            this.swap(curr_idx, parent_idx, heap);
            curr_idx = parent_idx;
            parent_idx = Math.floor((curr_idx - 1) / 2);
        }
    }

    insert(value: number): void {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1, this.heap);
        this.length++;
    }
    delete(): number | undefined {
        if (this.length === 0) return undefined;
        // heapify up
        // swap because javascript arrays
        this.swap(0, this.heap.length - 1, this.heap);
        // take end of heap
        const min_value = this.heap.pop();

        this.length--;
        // heapify down
        this.heapifyDown(0, this.heap.length - 1, this.heap);
        return min_value;
    }
    swap(idx_1: number, idx_2: number, heap: number[]): void {
        [heap[idx_1], heap[idx_2]] = [heap[idx_2], heap[idx_1]];
    }
    peek() {
        return this.heap[0];
    }
}
