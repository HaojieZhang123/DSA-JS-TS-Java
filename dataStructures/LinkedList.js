class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    toString() {
        return this.value;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    print() {
        const array = [];
        let currentNode = this.head;
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    inserAt(index, value) {
        if (index < 0 || index > this.length) {
            return null;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
            this.length++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            let temp = this.head;
            this.head = this.head.next;
            this.length--;
            return temp.value;
        }
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        let temp = curr.next;
        curr.next = curr.next.next;
        this.length--;
        return temp.value;
    }

    remove(value) {
        let curr = this.head;
        let prev = this.head;
        while (curr && curr.value !== value) {
            prev = curr;
            curr = curr.next;
        }
        if (curr) {
            prev.next = curr.next;
            this.length--;
            return curr.value;
        }
        return null;
    }
}

const expect = (actual) => ({
    toEqual: (expected) => {
        if (actual === expected) {
            console.log('PASS');
        } else {
            console.log('FAIL');
        }
    }
});


// test
const list = new SinglyLinkedList();

list.append(5);
list.append(7);
list.append(9);

console.log(list.print());

expect(list.get(2).toString()).toEqual(9);
expect(list.removeAt(1)).toEqual(7);
expect(list.length).toEqual(2);
console.log(list.print());


list.append(11);
console.log(list.print());

expect(list.removeAt(1)).toEqual(9);
expect(list.remove(9)).toEqual(null);
expect(list.removeAt(0)).toEqual(5);
expect(list.removeAt(0)).toEqual(11);
expect(list.length).toEqual(0);
console.log(list.print());

list.prepend(5);
list.prepend(7);
list.prepend(9);
console.log(list.print());

expect(list.get(2).toString()).toEqual(5);
expect(list.get(0).toString()).toEqual(9);
expect(list.remove(9)).toEqual(9);
expect(list.length).toEqual(2);
expect(list.get(0).toString()).toEqual(7);
console.log(list.print());
