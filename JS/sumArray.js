// Write a function that takes an array of numbers and returns the total sum of those numbers.
// Examples:

function sumArray(arr = []){
    let sum = 0;
    for (const element of arr) {
        
        sum += element
    }
    return sum;
    
}


sumArray([1, 2, 3, 4, 5]); // Output: 15
sumArray([-1, -2, -3, -4, -5]); // Output: -15
sumArray([10, 20, 30]); // Output: 60