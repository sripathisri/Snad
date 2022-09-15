class StringDemo{

    public static void main(String args[]){

        String str = new String(" Hello ");
        System.out.println(str);
        str = str.concat("welcome");
        System.out.println(str);

        System.out.println(str.length());
        System.out.println(str.indexOf("h"));
        System.out.println("character at = " + str.charAt(0));
         System.out.println(str.toUpperCase());
        System.out.println(str.compareTo("hello"));
        System.out.println(str.trim());
    }
}