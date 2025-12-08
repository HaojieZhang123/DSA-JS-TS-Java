package dataStructures;

// node class
class Node<T> {
    T value;
    Node<T> next;

    // constructor
    public Node() {
        this.value = null;
        this.next = null;
    }

    public Node(T value) {
        this.value = value;
        this.next = null;
    }
}

public class LinkedList {

    // singly linked list
    public static class SinglyLinkedList<T> {
        public int length;
        private Node<T> head;
        private Node<T> tail;

        // constructor
        public SinglyLinkedList() {
            this.length = 0;
            this.head = null;
            this.tail = null;
        }

        // getter and setters
        public Node<T> getHead() {
            return this.head;
        }

        public void setHead(Node<T> head) {
            this.head = head;
        }

        public Node<T> getTail() {
            return this.tail;
        }

        public void setTail(Node<T> tail) {
            this.tail = tail;
        }

        // TRAVERSAL
        // print all values
        public void print() {
            Node<T> curr = this.head;
            while (curr != null) {
                System.out.print(curr.value + " ");
                curr = curr.next;
            }
            System.out.println();
        }

        // SEARCH
        // get node at index
        public Node<T> get(int index) {
            // check index
            if (index < 0 || index >= this.length) {
                System.out.println("Invalid index");
                return null;
            }
            // otherwise, find the node at the index
            Node<T> curr = this.head;
            for (int i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr;
        }

        // INSERTION
        // add node at the beginning
        public void prepend(T item) {
            // create a new node
            Node<T> node = new Node<T>();
            node.value = item;
            node.next = this.head;
            this.head = node;
            this.length++;
        }

        // add node at the end
        public void append(T item) {
            // create a new node
            Node<T> node = new Node<T>();
            node.value = item;
            node.next = null;
            // if the list is empty
            if (this.length == 0) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
            this.length++;
        }

        // add node at specific index
        public void insert(T item, int index) {
            // check index
            if (index < 0 || index > this.length) {
                System.out.println("Invalid index");
                return;
            }

            // if index is 0
            if (index == 0) {
                this.prepend(item);
                return;
            }

            // if index is length
            if (index == this.length) {
                this.append(item);
                return;
            }

            // otherwise, find the node before the index
            Node<T> curr = this.head;
            for (int i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            // create a new node
            Node<T> node = new Node<T>();
            node.value = item;
            // point the new node's next to the current node's next
            node.next = curr.next;
            // and point the current node's next to the new node
            curr.next = node;
            // bookkeeping
            this.length++;
        }

        // DELETION
        // remove node at index
        public T removeAt(int index) {
            // check index
            if (index < 0 || index >= this.length) {
                System.out.println("Invalid index");
                return null;
            }

            // if index is 0
            if (index == 0) {
                Node<T> temp = this.head;
                this.head = this.head.next;
                this.length--;
                return temp.value;
            }

            // otherwise, find the node before the index
            Node<T> curr = this.head;
            for (int i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            // and remove the node at the index
            Node<T> temp = curr.next;
            curr.next = curr.next.next; // this works also for the last node
            this.length--;
            return temp.value;
        }

        // remove node with value
        public T remove(T item) {
            // find the node with the value
            Node<T> curr = this.head;
            Node<T> prev = this.head;
            while (curr != null && curr.value != item) {
                prev = curr;
                curr = curr.next;
            }
            // if found, remove it
            if (curr != null) {
                prev.next = curr.next;
                this.length--;
                return curr.value;
            }
            return null;
        }
    }

    public static void main(String[] args) {
        SinglyLinkedList<Integer> list = new SinglyLinkedList<Integer>();

        list.append(5);
        list.append(7);
        list.append(9);

        if (list.get(2).value == 9) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.removeAt(1) == 7) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.length == 2) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }

        list.append(11);
        if (list.removeAt(1) == 9) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.removeAt(9) == null) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.removeAt(0) == 5) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.removeAt(0) == 11) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }
        if (list.length == 0) {
            System.out.println("Success");
        } else {
            System.out.println("Fail");
        }

        list.prepend(5);
        list.prepend(7);
        list.prepend(9);

        list.print(); // 9 7 5

    }
}
