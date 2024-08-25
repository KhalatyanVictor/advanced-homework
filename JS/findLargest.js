// Write a function that takes an array of numbers and returns the largest number in that array.
// Examples:

function findLargest(arr = []){
    return Math.max(...arr)
}

findLargest([1, 3, 5, 7, 9]); // Output: 9
findLargest([-10, -5, 0, 5, 10]); // Output: 10
findLargest([34, 23, 12, 56, 89]); // Output: 89