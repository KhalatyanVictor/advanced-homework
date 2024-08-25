// Create a function that takes a string and returns a new string that is the reverse of the input string.
// Examples:

function reverseString(string){
    return string.split("").reverse().join("");
}


reverseString("JavaScript"); // Output: "tpircSavaJ"
reverseString("hello"); // Output: "olleh"
reverseString("OpenAI"); // Output: "IAnepO"