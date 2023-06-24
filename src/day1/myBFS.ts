export default function bfs(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    if (!head) {
        return result;
    }
    const queue: BinaryNode<number>[] | null = [head];
    while (queue.length > 0) {
        const node: BinaryNode<number> = queue.shift()!;
        if (!node) continue;

        result.push(node.value);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    return result;
}
