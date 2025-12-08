package dataStructures;

// node
class Node<T> {
    T value;
    Node<T> next;

    public Node() {
        this.value = null;
        this.next = null;
    }

    public Node(T value) {
        this.value = value;
        this.next = null;
    }
}

public class Queue<T> {
    public int length;
    private Node<T> head;
    private Node<T> tail;

    public Queue() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // getter and setter
    public Node<T> getHead() {
        return this.head;
    }

    public Node<T> getTail() {
        return this.tail;
    }

    public void setHead(Node<T> head) {
        this.head = head;
    }

    public void setTail(Node<T> tail) {
        this.tail = tail;
    }

    // add node to the end
    public void enqueue(T item) {
        Node<T> newNode = new Node<T>(item);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // remove node from the beginning and return the value
    public T deque() {
        if (this.length == 0)
            return null;

        Node<T> node = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.head == null) {
            // If queue becomes empty after removing the node, clear tail as well
            this.tail = null;
        }
        return node.value;
    }

    // return value of the head
    public T peek() {
        if (this.length == 0)
            return null;
        return this.head.value;
    }

    // print all values
    public void print() {
        if (this.length == 0)
            return;
        Node<T> node = this.head;
        while (node != null) {
            System.out.print(node.value + " ");
            node = node.next;
        }
        System.out.println();
    }

}
