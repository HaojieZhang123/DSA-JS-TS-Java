type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // add node to the end
    enqueue(item: T): void {

        // new node
        const node = { value: item } as Node<T>;

        // keep track of the length
        this.length++;

        // if no tail, set head and tail to the new node
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        // otherwise, add to the end
        // point the current tail to the new node
        this.tail.next = node;
        // update the tail
        this.tail = this.tail.next;

    }

    // remove node from the beginning and return the value
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        // take current head
        const node = this.head;
        // update head
        this.head = node.next;
        // keep track of the length
        this.length--;

        // if in traditional languages with no garbage collector, we have to free the memory
        // this.head.next = undefined;

        // if no head, set tail to undefined
        if (!this.head) {
            this.tail = undefined;
        }

        return node.value

    }

    // return the value of the head
    peek(): T | undefined {
        return this.head?.value
        // return value of head if not undefined, otherwise undefined
    }
} 