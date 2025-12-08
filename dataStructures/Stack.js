class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(item) {
        const node = new Node(item);

        if (!this.head) {
            this.head = node;
        } else {
            node.prev = this.head;
            this.head = node;
        }

        this.length++;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const item = this.head.value;
        this.head = this.head.prev;
        this.length--;
        return item;
    }

    peek() {
        return this.head?.value
    }
}


// tests

// Self-test harness: runs when this file is executed directly with Node
if (typeof require !== 'undefined' && require.main === module) {
    function assertEqual(actual, expected, msg) {
        if (actual === expected) return;
        // treat null/undefined as equal when both are nullish
        if (actual == null && expected == null) return;
        throw new Error(msg + " | expected=" + expected + " got=" + actual);
    }

    function assertTrue(cond, msg) {
        if (!cond) throw new Error(msg + " | condition was false");
    }

    console.log('Running Stack.js self-tests...');

    // Test 1: empty stack behavior
    const s = new Stack();
    assertEqual(s.length, 0, 'Initial length should be 0');
    assertEqual(s.peek(), undefined, 'Peek on empty should be undefined');
    assertEqual(s.pop(), null, 'Pop on empty should return null');

    // Test 2: single push
    s.push(1);
    assertEqual(s.length, 1, 'Length after one push');
    assertEqual(s.peek(), 1, 'Peek after one push');

    // Test 3: push/pop LIFO
    s.push(2);
    s.push(3);
    assertEqual(s.length, 3, 'Length after three pushes');
    assertEqual(s.peek(), 3, 'Peek should be last pushed');
    assertEqual(s.pop(), 3, 'Pop returns last pushed');
    assertEqual(s.pop(), 2, 'Pop returns second pushed');
    assertEqual(s.pop(), 1, 'Pop returns first pushed');
    assertEqual(s.length, 0, 'Length after draining should be 0');
    assertEqual(s.head, null, 'Head should be null after draining');

    // Test 4: types (strings)
    const ss = new Stack();
    ss.push('a');
    ss.push('b');
    assertEqual(ss.peek(), 'b', 'String peek');
    assertEqual(ss.pop(), 'b', 'String pop 1');
    assertEqual(ss.pop(), 'a', 'String pop 2');
    assertEqual(ss.pop(), null, 'Pop empty returns null');

    // Test 5: bulk operations
    const s2 = new Stack();
    for (let i = 0; i < 100; i++) s2.push(i);
    assertEqual(s2.length, 100, 'Bulk push length');
    for (let i = 99; i >= 50; i--) assertEqual(s2.pop(), i, 'Bulk pop value');
    assertEqual(s2.length, 50, 'Length after half pops');
    for (let i = 100; i < 150; i++) s2.push(i);
    assertEqual(s2.length, 100, 'Length after pushing more');
    let count = 0;
    while (s2.pop() !== null) count++;
    assertEqual(count, 100, 'Total popped count should be 100');
    assertEqual(s2.head, null, 'Head null after full drain');

    // Test 6: peek doesn't remove
    const s3 = new Stack();
    s3.push(42);
    assertEqual(s3.peek(), 42, 'Peek returns correct value');
    assertEqual(s3.length, 1, 'Peek does not change length');

    console.log('All Stack.js self-tests passed.');
}