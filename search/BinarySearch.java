package search;

public class BinarySearch {

    public static boolean binarySearch(int[] haystack, int needle) {
        int low = 0;
        int high = haystack.length - 1;

        while (low <= high) {
            int mid = (low + (high - low) / 2);
            int value = haystack[mid];
            if (value == needle)
                return true;
            if (value < needle)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return false;
    }

    public static void main(String[] args) {

        int[] haystack = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int needle;
        // ask user for needle
        System.out.print("Enter needle: ");
        needle = Integer.parseInt(System.console().readLine());
        // print result
        System.out.println(binarySearch(haystack, needle));
    }

}