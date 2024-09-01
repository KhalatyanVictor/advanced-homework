// Write a function that generates a Fibonacci sequence where each number is less than or equal to a
// given maximum number.
// Examples:

function generateFibonacci(number) {
    let fibSequence = [0, 1];
    while (true) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        if (nextFib > number) {
            break;
        }
        fibSequence.push(nextFib);
    }
    return fibSequence;
}


generateFibonacci(15); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
generateFibonacci(10); // Output: [0, 1, 1, 2, 3, 5, 8]
generateFibonacci(50); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]