// Write a function that finds the item that appears the most often in an array.
// Examples:


function mostFrequentItem(arr) {
    const frequency = {};

    let mostFrequent = null;
    let maxCount = 0;

    for (const item of arr) {

        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxCount) {
            maxCount = frequency[item];
            mostFrequent = item;
        }
    }

    return mostFrequent;
}


mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]); // Output: 4

mostFrequentItem([
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "banana",
]); // Output: 'banana'

 mostFrequentItem([10, 20, 10, 30, 20, 10]); // Output: 10