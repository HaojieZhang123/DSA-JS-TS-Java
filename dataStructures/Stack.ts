type Node<T> = {
    value: T;
    prev?: Node<T>;
}

export default class Stack<T> {
    public length: number;

    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = { value: item } as Node<T>;

        // bookkeeping length
        this.length++;

        // if no head, set head to the new node
        if (!this.head) {
            this.head = node;
        }

        // otherwise, add to the end
        else {
            // take our node and point it to the current head
            node.prev = this.head;
            // update the head
            this.head = node;
        }
    }
    pop(): T | undefined {
        // bookkeeping
        this.length = Math.max(0, this.length - 1);

        // if queue is empty
        if (this.length === 0) {
            const node = this.head;
            this.head = undefined;
            return node?.value;
        }

        // otherwise, remove from the beginning
        else {
            // take the current head
            const node = this.head as Node<T>;
            // update the head
            this.head = node.prev;
            // return the value of the removed node
            return node.value;
        }

    }
    peek(): T | undefined {
        return this.head?.value
    }
}