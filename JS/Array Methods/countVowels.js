// Create a function that takes a string and counts how many vowels (a, e, i, o, u) are in the string.
// Examples:


function countVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    const chars = "aeiou";
    for (let char of str) {
        if (chars.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
console.log(countVowels("Hello World"));
console.log(countVowels("OpenAI"));