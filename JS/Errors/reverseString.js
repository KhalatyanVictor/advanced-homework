function reverseString(s = ""){
    if (typeof s !== "string") {
        throw new Error("Input Valid String")
    }
    else{
        return s.split("").reverse().join("");
    }
}


console.log(reverseString(false));
