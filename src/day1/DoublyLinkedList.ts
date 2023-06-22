class Node<T> {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        node.next = this.head;
        this.head!.prev = node;
        this.head = node;
        this.length++;
        this.print();
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("index is larger than length");
        }

        if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let curr_node = this.head;
        for (let i = 0; curr_node && i < idx; ++i) {
            curr_node = curr_node.next;
        }

        curr_node = curr_node as Node<T>;
        const node = { value: item } as Node<T>;

        node.next = curr_node;
        node.prev = curr_node.prev;
        curr_node.prev = node;

        if (node.prev) {
            node.prev.next = node;
        }
    }
    append(item: T): void {
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
            return;
        }
        node.prev = this.tail;
        this.tail!.next = node;
        this.tail = node;
        this.length++;
        this.print();
    }
    remove(item: T): T | undefined {
        let curr_node = this.head;
        for (let i = 0; i < this.length; ++i) {
            if (curr_node?.value === item) {
                return this.removeNode(curr_node)?.value;
            }
            curr_node = curr_node?.next;
        }
        return undefined;
    }
    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }
    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);
        if (!node) {
            return undefined;
        }
        return this.removeNode(node)?.value;
    }

    private removeNode(node: Node<T>): Node<T> | undefined {
        this.length--;
        if (node === this.head) {
            this.head = this.head.next;
        }

        if (node === this.tail) {
            this.tail = this.tail.prev;
        }
        return this.removeNodeBindings(node);
    }

    private removeNodeBindings(node: Node<T>): Node<T> | undefined {
        if (node.prev !== undefined) {
            node.prev.next = node.next;
        }

        if (node.next !== undefined) {
            node.next.prev = node.prev;
        }

        node.prev = undefined;
        node.next = undefined;
        this.print();
        return node;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr?.next;
        }
        return curr;
    }
    print(): void {
        let curr_node = this.head;
        let result = "";

        while (curr_node) {
            result += curr_node.value + " <-> ";
            curr_node = curr_node.next;
        }

        result += "null";
        console.log(result);
    }
}
