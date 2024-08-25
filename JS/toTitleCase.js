// Write a function that converts a string so that each word starts with an uppercase letter and the rest
// are lowercase.
// Examples:

function toTitleCase(str){
    return str.split(" ").map(char => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()).join(" ");

}

console.log(toTitleCase("hello world"));
 toTitleCase("hello world"); // Output: "Hello World"
toTitleCase("javascript is fun"); // Output: "JavaScript Is Fun"
toTitleCase("OPENAI"); // Output: "Openai"