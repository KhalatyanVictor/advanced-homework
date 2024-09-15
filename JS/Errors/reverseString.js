// Task 1
// Complete the reverseString function, it has one parameter s. You must perform the following actions:
// 1. Try to reverse string s using the split,reverse, and join methods.
// 2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
// 3. Print s on new line. If no exception was thrown, then this should be the reversed string, if an exception
// was thrown, this should be the original string.
// Input Format
// Locked stub code in the editorreads variable s from stdin and passes it to the function.
// Output Format
// You must write two print statements using console.log():
// 1. Print the contents of a caught exception's message on a new line. If no exception was thrown, this line
// should not be printed.
// 2. Print s on a new line. If no exception was thrown, then this should be the reversed string, if an exception
// was thrown, this should be the original string.

function reverseString(s = ""){
    try{
        return s.split("").reverse().join("");
    }
    catch(e){
        return e.message;
        
    }
}


console.log(reverseString('1234'));
