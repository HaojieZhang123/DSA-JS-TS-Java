type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    // add node at the beginning
    prepend(item: T): void {
        const node = { value: item } as Node<T>;

        // if no head, set head and tail to coicide with the new node
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            // otherwise, point the new node to the current head
            node.next = this.head;
            // and update the head
            this.head = node;
        }

        // bookkeeping
        this.length++;
    }

    // add node at specific index
    insertAt(item: T, idx: number): void {

        // check if index is out of bounds
        if (idx > this.length || idx < 0) {
            console.log('Index out of bounds');
            return;
        }

        // if index is 0, prepend
        if (idx === 0) {
            this.prepend(item);
            return;
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else {
            // otherwise, find the node before the index
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr!.next;
            }
            const node = { value: item } as Node<T>;
            // point the new node's next to the current node's next
            node.next = curr!.next;
            // and point the current node's next to the new node
            curr!.next = node;

            // bookkeeping
            this.length++;
        }

    }

    // add node at the end
    append(item: T): void {
        const node = { value: item } as Node<T>;

        // if no head, set head and tail to coicide with the new node
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            // otherwise, point the current tail to the new node
            this.tail!.next = node;
            // and update the tail
            this.tail = node;
        }

        // bookkeeping
        this.length++;
    }

    // remove node
    remove(item: T): T | undefined {
        let curr = this.head;
        let prev = this.head;
        let index = 0;

        // find the node with the value
        while (curr && curr.value !== item) {
            prev = curr;
            curr = curr.next;
            index++;
        }

        // if found, remove it
        if (curr) {
            if (index === 0) {
                this.head = this.head!.next;
            } else if (index === this.length - 1) {
                this.tail = prev;
                this.tail!.next = undefined;
            } else {
                prev!.next = curr.next;
            }
            this.length--;
        }

        return curr?.value;

    }

    // get node at specific index
    get(idx: number): T | undefined {
        // check if index is out of bounds
        if (idx >= this.length || idx < 0) {
            console.log('Index out of bounds');
            return;
        } else {
            // otherwise, find the node at the index
            let curr = this.head;
            for (let i = 0; i < idx; i++) {
                curr = curr!.next;
            }
            // and return its value
            return curr!.value;
        }
    }

    // remove node at specific index
    removeAt(idx: number): T | undefined {
        // check if index is out of bounds
        if (idx >= this.length || idx < 0) {
            console.log('Index out of bounds');
            return undefined;
        } else if (idx === 0) {
            const item = this.head!.value;
            // check if list size is 1
            if (this.length === 1) {
                this.head = this.tail = undefined;
            } else {
                // otherwise, remove the head
                this.head = this.head!.next;
            }
            // bookkeeping
            this.length--;
            return item;
        } else if (idx === this.length - 1) {
            // if index is last, remove the tail
            const item = this.tail!.value;
            this.tail = this.head;
            for (let i = 0; i < this.length - 2; i++) {
                this.tail = this.tail!.next;
            }
            this.tail!.next = undefined;
            // bookkeeping
            this.length--;
            return item;
        } else {
            // otherwise, find the node before the index
            let curr = this.head;
            for (let i = 0; i < idx - 1; i++) {
                curr = curr!.next;
            }
            // save value
            const item = curr!.next!.value;
            // and point the current node's next to the next node
            curr!.next = curr!.next!.next;

            // bookkeeping
            this.length--;
            return item;
        }
    }
}