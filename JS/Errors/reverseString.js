function reverseString(s = ""){
    try{
        return s.split("").reverse().join("");
    }
    catch(e){
        return e.message;
        
    }
}


console.log(reverseString(false));
