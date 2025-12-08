package dataStructures;

public class QueueTest {

    private static void assertEquals(Object a, Object b, String msg) {
        if (a == null) {
            if (b != null) throw new AssertionError(msg + " | expected=" + b + " got=null");
        } else if (!a.equals(b)) {
            throw new AssertionError(msg + " | expected=" + b + " got=" + a);
        }
    }

    private static void assertTrue(boolean cond, String msg) {
        if (!cond) throw new AssertionError(msg + " | condition was false");
    }

    public static void main(String[] args) {
        // Test 1: basic enqueue/deque/peek behavior with Integers
        Queue<Integer> q = new Queue<>();
        assertEquals(q.length, 0, "Initial length");
        assertEquals(q.peek(), null, "Peek on empty");
        assertEquals(q.deque(), null, "Deque on empty should return null");

        q.enqueue(10);
        assertEquals(q.length, 1, "Length after one enqueue");
        assertEquals(q.peek(), 10, "Peek after one enqueue");
        assertEquals(q.getHead().value, 10, "Head value after one enqueue");
        assertEquals(q.getTail().value, 10, "Tail value after one enqueue");

        q.enqueue(20);
        q.enqueue(30);
        assertEquals(q.length, 3, "Length after three enqueues");
        assertEquals(q.peek(), 10, "Peek should still be first element");
        assertEquals(q.getHead().value, 10, "Head value check");
        assertEquals(q.getTail().value, 30, "Tail value check");

        Integer removed = q.deque();
        assertEquals(removed, 10, "Deque returns first element");
        assertEquals(q.length, 2, "Length after one deque");
        assertEquals(q.peek(), 20, "Peek after deque");
        assertEquals(q.getHead().value, 20, "Head after deque");

        // Remove remaining elements
        assertEquals(q.deque(), 20, "Deque second element");
        assertEquals(q.deque(), 30, "Deque third element");
        assertEquals(q.length, 0, "Length after removing all elements");
        assertEquals(q.getHead(), null, "Head should be null when empty");
        assertEquals(q.getTail(), null, "Tail should be null when empty (fixed bug)");

        // Test 2: mix of types (Strings)
        Queue<String> qs = new Queue<>();
        qs.enqueue("a");
        qs.enqueue("b");
        assertEquals(qs.peek(), "a", "String peek");
        assertEquals(qs.deque(), "a", "String deque");
        assertEquals(qs.deque(), "b", "String deque second");
        assertEquals(qs.deque(), null, "String deque empty -> null");

        // Test 3: repeated enqueue/deque to ensure internal pointers remain consistent
        Queue<Integer> q2 = new Queue<>();
        for (int i = 0; i < 100; i++) q2.enqueue(i);
        assertEquals(q2.length, 100, "Bulk enqueue length");
        for (int i = 0; i < 50; i++) {
            assertEquals(q2.deque(), i, "Bulk deque value");
        }
        assertEquals(q2.length, 50, "Length after half dequeues");
        // Enqueue more
        for (int i = 100; i < 150; i++) q2.enqueue(i);
        assertEquals(q2.length, 100, "Length after enqueuing more");
        // Drain completely
        int count = 0;
        Integer v;
        while ((v = q2.deque()) != null) count++;
        assertEquals(count, 100, "Total elements dequeued from q2");
        assertEquals(q2.getHead(), null, "Head null after drain");
        assertEquals(q2.getTail(), null, "Tail null after drain");

        // Test 4: peek does not remove
        Queue<Integer> q3 = new Queue<>();
        q3.enqueue(42);
        assertEquals(q3.peek(), 42, "peek returns value");
        assertEquals(q3.length, 1, "peek does not change length");

        // If we reach here, all assertions passed
        System.out.println("All Queue tests passed.");
    }
}
