export default class ArrayList<T> {
    public length: number;

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}

// array downsides
// can't delete, only 0 out
// cant inseart, only write
// can't grow
