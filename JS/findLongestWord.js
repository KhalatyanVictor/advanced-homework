// Write a function that identifies the longest word in a given sentence.
// Examples:

function findLongestWord(str) {
    let words = str.split(" ");
    let maxCount = 0;
    let longestWord = "";

    words.forEach(word => {
        let wordLength = word.length;
        if (wordLength > maxCount) {
            maxCount = wordLength;
            longestWord = word;
        }
    });

    console.log(longestWord);
}

findLongestWord("Hello World!"); // Output: "Hello"
findLongestWord("The quick brown fox jumps over the lazy dog"); // Output: "jumps"
findLongestWord("JavaScript is awesome"); // Output: "JavaScript"
