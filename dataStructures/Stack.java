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

public class Stack<T> {
    public int length;
    private Node<T> head;

    public Stack() {
        this.length = 0;
        this.head = null;
    }

    // getter and setter for encapsulation
    public Node<T> getHead() {
        return this.head;
    }

    public void setHead(Node<T> head) {
        this.head = head;
    }

    public void push(T item) {
        Node<T> newNode = new Node<T>(item);
        newNode.prev = this.head;
        this.head = newNode;
        this.length++;
    }

    public T pop() {
        if (this.length == 0)
            return null;
        Node<T> node = this.head;
        this.head = this.head.prev;
        this.length--;
        return node.value;
    }

    public T peek() {
        if (this.length == 0)
            return null;
        return this.head.value;
    }

    // print all values from top to bottom
    public void print() {
        if (this.length == 0)
            return;
        Node<T> node = this.head;
        while (node != null) {
            System.out.print(node.value + " ");
            node = node.prev;
        }
        System.out.println();
    }

    // main method with comprehensive unit tests
    public static void main(String[] args) {
        // Test 1: empty stack behavior
        Stack<Integer> s = new Stack<>();
        assert s.length == 0 : "Initial length should be 0";
        assert s.peek() == null : "Peek on empty should be null";
        assert s.pop() == null : "Pop on empty should be null";

        // Test 2: single push
        s.push(1);
        assert s.length == 1 : "Length after one push";
        assert s.peek() == 1 : "Peek after one push";
        assert s.getHead().value == 1 : "Head value after one push";

        // Test 3: push/pop LIFO order
        s.push(2);
        s.push(3);
        assert s.length == 3 : "Length after three pushes";
        assert s.peek() == 3 : "Peek should be last pushed";
        assert s.pop() == 3 : "Pop returns last pushed";
        assert s.pop() == 2 : "Pop returns second pushed";
        assert s.pop() == 1 : "Pop returns first pushed";
        assert s.length == 0 : "Length after draining should be 0";
        assert s.getHead() == null : "Head should be null after draining";

        // Test 4: types (Strings)
        Stack<String> ss = new Stack<>();
        ss.push("a");
        ss.push("b");
        assert ss.peek().equals("b") : "String peek";
        assert ss.pop().equals("b") : "String pop 1";
        assert ss.pop().equals("a") : "String pop 2";
        assert ss.pop() == null : "Pop empty returns null";

        // Test 5: bulk operations
        Stack<Integer> s2 = new Stack<>();
        for (int i = 0; i < 100; i++)
            s2.push(i);
        assert s2.length == 100 : "Bulk push length";
        for (int i = 99; i >= 50; i--) {
            assert s2.pop() == i : "Bulk pop value";
        }
        assert s2.length == 50 : "Length after half pops";
        for (int i = 100; i < 150; i++)
            s2.push(i);
        assert s2.length == 100 : "Length after pushing more";
        int count = 0;
        Integer v;
        while ((v = s2.pop()) != null)
            count++;
        assert count == 100 : "Total popped count should be 100";
        assert s2.getHead() == null : "Head null after full drain";

        // Test 6: peek doesn't remove
        Stack<Integer> s3 = new Stack<>();
        s3.push(42);
        assert s3.peek() == 42 : "Peek returns correct value";
        assert s3.length == 1 : "Peek does not change length";

        // Test 7: print method (visual verification)
        Stack<Integer> s4 = new Stack<>();
        s4.push(10);
        s4.push(20);
        s4.push(30);
        System.out.print("Stack contents (top to bottom): ");
        s4.print();
        assert s4.length == 3 : "Print doesn't affect length";

        System.out.println("All Stack tests passed.");
    }
}
