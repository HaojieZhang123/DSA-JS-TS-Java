class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    toString() {
        return this.value;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(item) {
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    dequeue() {
        if (!this.head) {
            return null;
        }
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        // If the queue becomes empty after removing the head, clear the tail
        if (!this.head) {
            this.tail = null;
        }
        return temp.value;
    }

    peek() {
        return this.head?.value
    }
}

// Self-test harness: runs when this file is executed directly with Node
if (typeof require !== 'undefined' && require.main === module) {
    function assertEqual(actual, expected, msg) {
        if (actual === expected) return;
        // handle case when both are null/undefined
        if (actual == null && expected == null) return;
        throw new Error(msg + " | expected=" + expected + " got=" + actual);
    }

    function assertTrue(cond, msg) {
        if (!cond) throw new Error(msg + " | condition was false");
    }

    console.log('Running Queue.js self-tests...');

    // Test 1: empty queue behavior
    const q = new Queue();
    assertEqual(q.length, 0, 'Initial length should be 0');
    assertEqual(q.peek(), undefined, 'Peek on empty should be undefined');
    assertEqual(q.dequeue(), null, 'Dequeue on empty should be null');

    // Test 2: single enqueue
    q.enqueue(1);
    assertEqual(q.length, 1, 'Length after one enqueue');
    assertEqual(q.peek(), 1, 'Peek after one enqueue');
    assertEqual(q.head.value, 1, 'Head value after one enqueue');
    assertEqual(q.tail.value, 1, 'Tail value after one enqueue');

    // Test 3: multiple enqueues and dequeues
    q.enqueue(2);
    q.enqueue(3);
    assertEqual(q.length, 3, 'Length after three enqueues');
    assertEqual(q.peek(), 1, 'Peek should be first element');
    assertEqual(q.tail.value, 3, 'Tail should be last enqueued');

    assertEqual(q.dequeue(), 1, 'Dequeued first element');
    assertEqual(q.length, 2, 'Length after one dequeue');
    assertEqual(q.peek(), 2, 'Peek after dequeue');

    // Drain remaining elements and ensure tail cleared
    assertEqual(q.dequeue(), 2, 'Dequeued second element');
    assertEqual(q.dequeue(), 3, 'Dequeued third element');
    assertEqual(q.length, 0, 'Length after draining should be 0');
    assertEqual(q.head, null, 'Head should be null after draining');
    assertEqual(q.tail, null, 'Tail should be null after draining (important)');

    // Test 4: types (strings)
    const qs = new Queue();
    qs.enqueue('a');
    qs.enqueue('b');
    assertEqual(qs.peek(), 'a', 'String peek');
    assertEqual(qs.dequeue(), 'a', 'String dequeue1');
    assertEqual(qs.dequeue(), 'b', 'String dequeue2');
    assertEqual(qs.dequeue(), null, 'Dequeue empty returns null');

    // Test 5: bulk enqueue/dequeue
    const q2 = new Queue();
    for (let i = 0; i < 100; i++) q2.enqueue(i);
    assertEqual(q2.length, 100, 'Bulk enqueue length');
    for (let i = 0; i < 50; i++) assertEqual(q2.dequeue(), i, 'Bulk dequeue value');
    assertEqual(q2.length, 50, 'Length after half dequeues');
    for (let i = 100; i < 150; i++) q2.enqueue(i);
    assertEqual(q2.length, 100, 'Length after enqueuing more');
    // Drain completely
    let count = 0;
    while (q2.dequeue() !== null) count++;
    assertEqual(count, 100, 'Total dequeued count should be 100');
    assertEqual(q2.head, null, 'Head null after full drain');
    assertEqual(q2.tail, null, 'Tail null after full drain');

    // Test 6: peek should not remove
    const q3 = new Queue();
    q3.enqueue(42);
    assertEqual(q3.peek(), 42, 'Peek returns correct value');
    assertEqual(q3.length, 1, 'Peek does not change length');

    console.log('All Queue.js self-tests passed.');
}

