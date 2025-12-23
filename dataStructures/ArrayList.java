package dataStructures;

public class ArrayList<T> {
    public int length;
    private T[] array;

    @SuppressWarnings("unchecked")
    public ArrayList(int capacity) {
        this.length = 0;
        // array casted because generic array allocation not allowes
        this.array = (T[]) new Object[capacity];
    }

    public void prepend(T item) {
        this.insertAt(item, 0);
    }

    public void append(T item) {
        this.insertAt(item, this.length);
    }

    public void insertAt(T item, int idx) {
        // check index bounds
        if (idx < 0 || idx > this.length) {
            throw new IndexOutOfBoundsException("Index " + idx + " is out of bounds.");
        }
        // resize if needed
        if (this.length == this.array.length) {
            this.resize();
        }
        // shift elements to the right
        for (int i = this.length; i > idx; i--) {
            this.array[i] = this.array[i - 1];
        }
        // insert item
        this.array[idx] = item;
        this.length++;
    }

    public T remove(T item) {
        int idx = -1;
        // search item
        for (int i = 0; i < this.length; i++) {
            if (this.array[i].equals(item)) {
                idx = i;
                break;
            }
        }
        // if found, remove
        if (idx != -1) {
            return this.removeAt(idx);
        }
        return null;
    }

    public T get(int idx) {
        // check index bounds
        if (idx < 0 || idx >= this.length) {
            throw new IndexOutOfBoundsException("Index " + idx + " is out of bounds.");
        }
        return this.array[idx];
    }

    public T removeAt(int idx) {
        // check index bounds
        if (idx < 0 || idx >= this.length) {
            throw new IndexOutOfBoundsException("Index " + idx + " is out of bounds.");
        }
        T removedItem = this.array[idx];
        // shift elements to the left
        for (int i = idx; i < this.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        // clear last element
        this.array[this.length - 1] = null;
        this.length--;
        return removedItem;
    }

    @SuppressWarnings("unchecked")
    private void resize() {
        int newCapacity = this.array.length == 0 ? 4 : this.array.length * 2;
        T[] newArray = (T[]) new Object[newCapacity];

        // copy elements to new array
        for (int i = 0; i < this.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }
}
