// Create a function that checks if a string reads the same forwards and backwards, ignoring spaces,
// punctuation, and case.
// Examples:

function isPalindrome(str){
    str = str.toLowerCase();
    const reverseStr = str.split("").reverse().join("");
    if(str === reverseStr){
        return true
    } else{
        return false
    }
}

console.log(isPalindrome("A man, a plan, a canal, Panama")  );
 isPalindrome("A man, a plan, a canal, Panama"); // Output: true
isPalindrome("Racecar"); // Output: true
isPalindrome("Hello"); // Output: false