export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: BinaryNode<number>[] | null = [head];
    while (queue.length > 0) {
        const node = queue.shift() as BinaryNode<number> | undefined | null;
        if (!node) continue;

        // search
        if (node.value === needle) return true;

        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return false;
}

// Time/space complexity
// O(n)
// worst case because of shift/unshift O(n^2)
