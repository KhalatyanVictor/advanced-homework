// 5. * Calculate the total sum of payment amounts made by each
// student. We need to return an array that contains a list of
// information about students, including the total paid amount by the
// student.
// Հաշվել յուրաքանչյուր ուսանողի կողմից վճարված ամբողջ գումարը։
// Անհրաժեշտ է վերադարձնել ուսանողների ցուցակը (array), որը
// ընդգրկում է ուսանողների տվյալները, նեռարյալ ուսանողի կողմից
// ամբողջ վճարված գումարը։

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

function totalSumEach(arr){
    let totals = {};
    arr.forEach(student => {
        if (totals[student.studentId]) {
            totals[student.studentId] += student.payedAmount;
        } else {
            totals[student.studentId] = student.payedAmount;
        }
    
    });
    
    for (const studentId in totals) {
        console.log([`Student ID: ${studentId}`, `Total Payed: ${totals[studentId]}`]);
    }
    
    
}

console.log(totalSumEach(payments));
