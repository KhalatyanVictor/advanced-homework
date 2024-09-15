// Task 3
// Convert the code using try...catch.

function reverseString(s) {
    try{
        return s.split("").reverse().join("");
    } catch(error){
        return error.message
    }
}


console.log(reverseString(1234));