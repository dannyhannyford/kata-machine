function recurse(curr: BinaryNode<number> | null, path: number[]): void {
    if (!curr) {
        return;
    }
    // recurse left
    recurse(curr.left, path);
    // recurse right
    recurse(curr.right, path);
    // visit
    path.push(curr.value);
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    recurse(head, path);
    return path;
}
