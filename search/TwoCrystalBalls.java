package search;

public class TwoCrystalBalls {

    public static int twoCrystalBalls(int[] breaks) {
        int jumps = (int) Math.floor(Math.sqrt(breaks.length));

        // jump and see if breaks
        int i = jumps;
        for (; i < breaks.length; i += jumps) {
            if (breaks[i] == 1) {
                break;
            }
        }

        // walk back one increment
        i = i + 1 - jumps;
        for (int j = 0; j < jumps && i < breaks.length; j++, i++) {
            if (breaks[i] == 1) {
                return i;
            }
        }

        // if not
        return -1;

    }

    public static void main(String[] args) {

        int[] breakingPoint = new int[] { 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 };
        // print result
        System.out.println(twoCrystalBalls(breakingPoint));
    }

}