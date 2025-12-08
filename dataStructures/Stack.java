package dataStructures;

class Node<T> {
    T value;
    Node<T> prev;

    public Node() {
        this.value = null;
        this.prev = null;
    }

    public Node(T value) {
        this.value = value;
        this.prev = null;
    }
}

public class Stack {

}
