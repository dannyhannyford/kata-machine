function recurse(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return;
    }

    // visit
    path.push(curr.value);
    // recurse left
    recurse(curr.left, path);
    // recurse right
    recurse(curr.right, path);
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    recurse(head, path);
    return path;
}
