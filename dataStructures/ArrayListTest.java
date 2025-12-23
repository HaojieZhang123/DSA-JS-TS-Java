package dataStructures;

public class ArrayListTest {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(2);

        list.append(10);
        list.append(20);
        list.append(30); // Triggers resize
        list.prepend(5);

        list.remove(20);
    }
}
