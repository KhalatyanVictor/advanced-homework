// Write a function that calculates the average (mean) of all numbers in an array.
// Examples:

function findAverage(arr = []){
    let average = 0;
    for (const element of arr) {
        average += element
    }

    return average / arr.length;
}


findAverage([10, 20, 30, 40, 50]); // Output: 30
findAverage([1, 2, 3, 4, 5]); // Output: 3
findAverage([100, 200, 300]); // Output: 200