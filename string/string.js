//  string:- It is a sequence of characters used to store text. In JavaScript it can be written using single quotes (' '), double quotes (" "), or backticks ( ).
let str ="Hello Mahak";

//  it is of many types:- 

//  length:- used to find the number of characters in a string including space.
console.log(str.length);

// split():-used to convert a string into an array by splitting it using an seperator
let result= str.split(" ");
console.log(result);

// charAt():- used to get the character at specified position.
console.log(str.charAt(0));
console.log(str.charAt(2));

// toLowerCase():- converts the string into lowercase letters
console.log(str.toLowerCase());

// toUpperCase():- converts the string into uppercase letters
console.log(str.toUpperCase());

//trim:- Used to remove extra spaces from the start and end of a string and it does not remove spaces between words.
let result1 = str.trim();
console.log(result1);
console.log(result1.length);

//include():- Used to check whether a string contains a specific word or character and it returns true or false.
console.log(str.includes("Mahak"));
console.log(str.includes("Python"));

//startsWith():- Used to check whether a string starts with a specified character or word and returns true or false.
console.log(str.startsWith("JavaScript"));
console.log(str.startsWith("Hello"));

//endsWith():- Used to check whether a string ends with a specified character or word and returns true or false.
console.log(str.endsWith("JavaScript"));
console.log(str.endsWith("Mahak"));

//slice:- Used to extract a part of a string and return it as a new string, it does not change the original string and supports negative indexes.
console.log(str.slice(0,4));
console.log(str.slice(4));
console.log(str.slice(-6));

//substring():- Similar to slice() but does NOT support negative indexes and if start > end, it swaps the values.
console.log(str.substring(0, 7));  
console.log(str.substring(7, 0));  
console.log(str.substring(4));

// replace():- Replaces only the first occurrence of a value in a string and returns a new string.
console.log(str.replace("Mahak", "Amu"));

//replaceAll():- Replaces all occurrences of a value in a string.
console.log(str.replaceAll("Mahak", "Ambesh"));

//conact:- used to join two or more strings and return a new string and it does not change the original strings.
let str1 = "Hello";
let str2 = "World";
let result3 = str1.concat(" ", str2);
console.log(result3);

//8279855067(Abhinav sir(training department))

let input= "I$$Am$$AmAn"
let cleaned=input.split("$$").join("");
let result4="";
for(let ch of cleaned){
    if(ch === ch.toUpperCase()){
        result4+= ch.toLowerCase();
    }else{
        result4+= ch.toUpperCase();
    }
}
console.log(result4);