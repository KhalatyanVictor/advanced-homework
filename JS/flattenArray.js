// Write a function that flattens a nested array (an array within an array) into a single array.
// Examples:

function flattenArray(arr) {
    return arr.flat(Infinity)
}

flattenArray([[1, 2, [3]], [4, 5], [6]]); // Output: [1, 2, 3, 4, 5, 6]
flattenArray([1, [2, [3, [4]]], 5]); // Output: [1, 2, 3, 4, 5]
flattenArray([["a", "b"], ["c", ["d", "e"]], "f"]); // Output: ['a', 'b', 'c', 'd', 'e', 'f']