// Write a function that sorts an array of objects based on a specific property, such as age or name.
// Examples:

function sortObjects(arr, sortElement){
    const sorted = arr.sort((a, b) => a[sortElement] - b[sortElement])
    
    return sorted;
}

sortObjects(
[
{ name: "Alice", age: 25 },
{ name: "Bob", age: 30 },
{ name: "Charlie", age: 20 },
],
"age"
);
// Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
sortObjects(
[
{ name: "Zara", salary: 50000 },
{ name: "John", salary: 70000 },
{ name: "Doe", salary: 60000 },
],
"salary"
);
// Output: [{ name: "Zara", salary: 50000 }, { name: "Doe", salary: 60000 }, { name: "John", salary: 70000 }]
sortObjects(
[
{ name: "Alice", score: 85 },
{ name: "Bob", score: 90 },
{ name: "Charlie", score: 80 },
],
"score"
);
// Output: [{ name: "Charlie", score: 80 }, { name: "Alice", score: 85 }, { name: "Bob", score: 90 }]