const payments = [
    {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe", // Name of the student
    payedAmount: 1600, // Amount payed with this transaction
    year: 2020, // The payment year
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022
    },
    {
    studentId: 1, // Unique for each student
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1500,
    
    year: 2020
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023
    },
    {
    studentId: 2, // Unique for each student
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023
    }
    ];

// 3. Find the count of all payments that are more than 1500
// Գտնել բոլոր այն վճարումների քանակը, որոնք ավելին են 1500-ից


function countOfBiggerThan1500(arr){
    let count = 0;
    for (const obj of arr) {
        if (obj.payedAmount > 1500) {
            count++;
        }
    }

    return count;
}

console.log(countOfBiggerThan1500(payments));
