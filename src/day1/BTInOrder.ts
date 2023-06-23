function recurse(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return;
    }
    // recurse left
    recurse(curr.left, path);
    // visit
    path.push(curr.value);
    // recurse right
    recurse(curr.right, path);
}
export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    recurse(head, path);
    return path;
}
