// Write a function that returns an array of elements that are present in both of the given arrays.
// Examples:

function findIntersection(arr1, arr2){

    let arr = arr1.filter(element => arr2.includes(element)); 
    
    return arr;
}


findIntersection([1, 2, 3, 4], [3, 4, 5, 6, 3]); // Output: [3, 4]
findIntersection(["a", "b", "c"], ["b", "c", "d"]); // Output: ['b', 'c']
findIntersection([7, 8, 9], [9, 10, 11]); // Output: [9]