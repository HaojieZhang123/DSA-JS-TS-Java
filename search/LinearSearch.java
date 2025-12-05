package search;

public class LinearSearch {

    public static int linearSearch(int[] haystack, int needle) {
        for (int i = 0; i < haystack.length; i++) {
            if (haystack[i] == needle)
                return haystack[i];
        }
        return -1;
    }

    public static void main(String[] args) {

        int[] haystack = new int[] { 213, 32, 543, 65, 39202, 43, 567, 245, 245, 90 };
        int needle;
        // ask user for needle
        System.out.print("Enter needle: ");
        needle = Integer.parseInt(System.console().readLine());
        // print result
        System.out.println(linearSearch(haystack, needle));
    }

}
