// Task 4
// A teacher has created a gradeLabs function that verifies if student programming labs work. This function
// loops over an array of JavaScript objects that should contain a student property and runLab property. The
// runLab property is expected to be a function containing the student's code. The runLab function is called
// and the result is compared to the expected result. If the result and expected results don't match, then the lab is
// considered a failure.
// gradeLabs
// The gradeLabs function works forthe majority of cases. However, what happens if a student named their
// function incorrectly? Run gradeLabs and pass it studentLabs2 as defined below.

let studentLabs2 = [
    {
        student: "Blake",
        myCode: function (num) {
        return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
        return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
        return num * num;
        },
    },
];

function gradeLabs(arr){
    try{
        return arr.runLab();
    } catch(error){
        return error.message
    }
}


console.log(gradeLabs(studentLabs2));




// Upon running the second example, the teacher gets TypeError: lab.runLab is not a function.
// Add a try/catch block inside of gradeLabs to catch an exception if the runLab property is not defined. If
// the exception is thrown, the result should be set to the text "Error thrown".