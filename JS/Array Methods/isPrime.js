// Write a function that determines whether a given number is a prime number (a number greater than 1
// that has no positive divisors other than 1 and itself).
// Examples:

function isPrime(number){
    if (number % 2 !== 0 && number % 3 !== 0) {
        return true
    } else{
        return false
    }
}


isPrime(7); // Output: true
isPrime(10); // Output: false
isPrime(13); // Output: true